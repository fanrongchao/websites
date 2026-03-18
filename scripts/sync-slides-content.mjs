import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const websitesRoot = path.resolve(scriptDir, "..");
const basePath = path.resolve(websitesRoot, "../slides/content/xfa/source.md");
const requestedProfile = process.env.SLIDES_PROFILE ?? "website-default";
const outputPath = path.resolve(
  websitesRoot,
  "apps/xfa-website/src/content/slideContent.generated.ts",
);

function getSection(markdown, heading) {
  const lines = markdown.split("\n");
  const startIndex = lines.findIndex((line) => line.trim() === `## ${heading}`);

  if (startIndex === -1) {
    throw new Error(`Missing section: ${heading}`);
  }

  const collected = [];

  for (let index = startIndex + 1; index < lines.length; index += 1) {
    if (lines[index].startsWith("## ")) {
      break;
    }
    collected.push(lines[index]);
  }

  return collected.join("\n").trim();
}

function getField(section, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = section.match(new RegExp(`^${escaped}:\\s*(.+)$`, "m"));

  if (!match) {
    throw new Error(`Missing field "${label}"`);
  }

  return match[1].trim();
}

function getItems(section) {
  return section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => {
      const [title, description] = line.slice(2).split("::").map((part) => part.trim());

      if (!title || !description) {
        throw new Error(`Invalid list item: ${line}`);
      }

      return { title, description };
    });
}

function splitCta(value) {
  const [label, href] = value.split("|").map((part) => part.trim());

  if (!label || !href) {
    throw new Error(`Invalid CTA line: ${value}`);
  }

  return { label, href };
}

function getTopField(markdown, label) {
  return getField(markdown, label);
}

function getRuleItems(section) {
  return getItems(section).map((item) => ({
    key: item.title,
    audience: item.description.split("|")[0]?.trim(),
    layers:
      item.description
        .split("|")[1]
        ?.split(",")
        .map((part) => part.trim()) ?? [],
  }));
}

const baseMarkdown = await fs.readFile(basePath, "utf8");
const profiles = getRuleItems(getSection(baseMarkdown, "Distribution Profiles"));
const profile = profiles.find((item) => item.key === requestedProfile);

if (!profile?.audience) {
  throw new Error(`Missing distribution profile: ${requestedProfile}`);
}

const audiencePath = path.resolve(
  websitesRoot,
  `../slides/content/xfa/audiences/${profile.audience}.md`,
);
const audienceMarkdown = await fs.readFile(audiencePath, "utf8");
const heroSection = getSection(audienceMarkdown, "Hero");
const capabilitiesSection = getSection(audienceMarkdown, "Capabilities");
const solutionsSection = getSection(audienceMarkdown, "Solutions");
const aboutSection = getSection(audienceMarkdown, "About");
const metricsSection = getSection(baseMarkdown, "Company Metrics");
const baseAboutSection = getSection(baseMarkdown, "Confirmed About");
const targetStateSection = getSection(baseMarkdown, "Target State");
const roadmapSection = getSection(baseMarkdown, "Roadmap");

const hero = {
  badge: getField(heroSection, "Badge"),
  title: getField(heroSection, "Title"),
  description: getField(heroSection, "Description"),
  primaryCta: splitCta(getField(heroSection, "Primary CTA")),
  secondaryCta: splitCta(getField(heroSection, "Secondary CTA")),
};

const capabilities = {
  kicker: getField(capabilitiesSection, "Kicker"),
  heading: getField(capabilitiesSection, "Heading"),
  items: getItems(capabilitiesSection),
};

const solutions = {
  kicker: getField(solutionsSection, "Kicker"),
  heading: getField(solutionsSection, "Heading"),
  items: getItems(solutionsSection),
};

const about = {
  kicker: getField(baseAboutSection, "Kicker"),
  heading: getField(baseAboutSection, "Heading"),
  summary: getField(aboutSection, "Summary"),
  paragraphs: [
    getField(aboutSection, "Paragraph 1"),
    getField(aboutSection, "Paragraph 2"),
  ],
  metrics: getItems(metricsSection).map((item) => ({
    label: item.title,
    value: item.description,
  })),
};

const targetState = {
  headline: getField(targetStateSection, "Headline"),
  narrative: getField(targetStateSection, "Narrative"),
  items: getItems(targetStateSection),
};

const roadmap = getItems(roadmapSection);

const fileContents = `export const slideContent = ${JSON.stringify(
  {
    audience: {
      key: getTopField(audienceMarkdown, "Audience"),
      label: getTopField(audienceMarkdown, "Label"),
      deckTitle: getTopField(audienceMarkdown, "Deck Title"),
      theme: getTopField(audienceMarkdown, "Theme"),
    },
    distribution: {
      profile: requestedProfile,
      audience: profile.audience,
      layers: profile.layers,
    },
    hero,
    capabilities,
    solutions,
    about,
    targetState,
    roadmap,
  },
  null,
  2,
)} as const;\n`;

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, fileContents);
console.log(`Synced ${basePath} + ${audiencePath} -> ${outputPath}`);
