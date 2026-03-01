# Figma MCP Workflow

This document outlines the unified workflow for interacting with Figma designs across our different AI coding assistants (Gemini, Claude/Cline, and Cursor/Codex).

## Objective

Our goal is to treat Figma as the single source of truth for assets, layout dimensions, colors, and typography. By using the Figma MCP (Model Context Protocol), all AI assistants can directly query Figma files and nodes to extract CSS, SVG assets, and structural information, rather than relying on manual exports or disconnected screenshots.

## Architecture

We use the official `@modelcontextprotocol/server-figma` MCP server. It requires a `FIGMA_ACCESS_TOKEN` to authenticate and fetch data.

### Unified Configuration

We maintain MCP configurations in specific directories for each tool so they can automatically pick up the Figma MCP capabilities:

1. **Cursor (Codex)**: Managed via `.cursor/mcp.json`
2. **Claude (via Cline in VSCode)**: Managed via `.vscode/cline_mcp_settings.json`
3. **Claude Desktop**: Can be linked to this project's config by copying the server block into `~/.config/Claude/claude_desktop_config.json`.
4. **Gemini CLI**: Can be run by exporting the environment variable and providing an MCP config JSON to the CLI runtime.

## Usage Guide for AI Agents

When asked to implement a UI component or extract an asset:
1. Identify the Figma File URL or File Key from the user's prompt.
2. Use the Figma MCP tool `get_file_nodes` or `get_file` to fetch the specific design node.
3. Extract styling properties (colors, typography, dimensions) directly from the node data.
4. For assets (icons, illustrations), use the `get_image` or `get_image_fill` tools to retrieve the raw image or SVG URLs, download them, and place them into the appropriate `/public` or `/src/assets` directory.

## Setup Instructions

To enable the MCP, a Figma Personal Access Token is required.

1. Go to your Figma account settings.
2. Under "Personal Access Tokens", click "Generate new token".
3. Replace `<YOUR_FIGMA_ACCESS_TOKEN>` in `.cursor/mcp.json` and `.vscode/cline_mcp_settings.json` with your actual token.

**Security Warning:** NEVER commit your actual `FIGMA_ACCESS_TOKEN` to source control. The configuration files containing actual tokens should be ignored in `.gitignore`.
