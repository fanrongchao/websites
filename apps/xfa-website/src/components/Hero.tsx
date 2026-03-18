import React from 'react';
import { slideContent } from '../content/slideContent.generated';

type HeroContent = {
  badge: string;
  eyebrow?: string;
  title?: string;
  titleLead?: string;
  titleAccent?: string;
  description: string;
  strips?: Array<{ title: string; description: string }>;
  orbit?: string[];
  stats?: Array<{ value: string; label: string }>;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function Hero() {
  const hero = slideContent.hero as HeroContent;
  const titleLead = hero.titleLead ?? hero.title ?? '数字中国';
  const titleAccent = hero.titleAccent ?? '新方案';
  const eyebrow = hero.eyebrow ?? 'Enterprise systems, platform delivery, industry solutions';
  const strips = hero.strips ?? [
    { title: '平台建设', description: '从底层能力沉淀到统一应用框架' },
    { title: '行业落地', description: '围绕高频经营场景组织解决方案' },
    { title: '持续交付', description: '让数字化建设具备长期演进能力' }
  ];
  const orbit = hero.orbit ?? ['Data Governance', 'AIOT Platform', 'Workflow Systems'];
  const stats = hero.stats ?? [
    { value: '4', label: '核心平台' },
    { value: '6', label: '重点方案' },
    { value: '1', label: '统一交付体系' }
  ];

  return (
    <section className="hero">
      <div className="hero-shell hero-bento">
        <div className="hero-copy hero-tile hero-tile-primary fade-up">
          <div className="hero-badge">{hero.badge}</div>
          <p className="hero-eyebrow">{eyebrow}</p>
          <h1 className="hero-title">
            <span>{titleLead}</span>
            <em>{titleAccent}</em>
          </h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <a href={hero.primaryCta.href} className="btn btn-primary">{hero.primaryCta.label}</a>
            <a href={hero.secondaryCta.href} className="btn btn-secondary">{hero.secondaryCta.label}</a>
          </div>
          <div className="hero-strip">
            {strips.map((item) => (
              <div key={item.title} className="hero-strip-card">
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-panel hero-tile hero-tile-visual fade-up fade-up-delay" aria-hidden="true">
          <div className="hero-panel-content">
            <div>
              <p className="hero-panel-label">Platform map</p>
              <div className="hero-orbit">
                {orbit.map((item) => (
                  <div key={item} className="hero-orbit-item">{item}</div>
                ))}
              </div>
            </div>
            <div className="hero-panel-stat">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat-box">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <article className="hero-mini-tile fade-up">
          <p className="hero-mini-label">Delivery rhythm</p>
          <strong>Platform first</strong>
          <p>先沉淀共性能力，再把行业场景接入统一底座。</p>
        </article>
        <article className="hero-mini-tile fade-up fade-up-delay">
          <p className="hero-mini-label">Project fit</p>
          <strong>System upgrade</strong>
          <p>适合平台升级、流程重构、方案整合与交付治理阶段。</p>
        </article>
      </div>
    </section>
  );
}
