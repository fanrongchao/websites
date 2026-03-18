import React from 'react';
import { slideContent } from '../content/slideContent.generated';

const CARD_CLASSES = [
  'capability-card capability-card-large',
  'capability-card capability-card-medium',
  'capability-card capability-card-wide',
  'capability-card capability-card-wide'
] as const;

export function Capabilities() {
  const capabilities = slideContent.capabilities as {
    kicker: string;
    heading: string;
    description?: string;
    items: readonly { title: string; description: string; label?: string }[];
  };
  const description =
    capabilities.description ??
    '从基础平台到行业场景，从数据治理到持续交付，把能力堆栈组织成统一的建设路径。';

  return (
    <section id="capabilities" className="section">
      <div className="section-header">
        <p className="section-kicker">{capabilities.kicker}</p>
        <h2 className="section-title">{capabilities.heading}</h2>
        <p className="section-description">{description}</p>
      </div>
      <div className="capability-grid">
        {capabilities.items.map((capability, index) => (
          <article key={capability.title} className={CARD_CLASSES[index] ?? 'capability-card'}>
            <p className="capability-label">{capability.label ?? 'Platform capability'}</p>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
