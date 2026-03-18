import React from 'react';
import { slideContent } from '../content/slideContent.generated';

export function Solutions() {
  const solutions = slideContent.solutions as {
    kicker: string;
    heading: string;
    description?: string;
    items: readonly { title: string; description: string; focus?: readonly string[] }[];
  };
  const description =
    solutions.description ?? '用更接近业务语言的方式展示产品组合，让决策者快速理解落地边界。';

  return (
    <section id="solutions" className="section">
      <div className="section-header">
        <p className="section-kicker">{solutions.kicker}</p>
        <h2 className="section-title">{solutions.heading}</h2>
        <p className="section-description">{description}</p>
      </div>
      <div className="solutions-grid">
        {solutions.items.map((solution, index) => (
          <article key={solution.title} className="solution-card">
            <div className="solution-card-top">
              <p className="solution-index">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="solution-title">{solution.title}</h3>
            </div>
            <div className="solution-detail">
              <p className="solution-desc">{solution.description}</p>
              <div className="solution-tags">
                {(solution.focus ?? ['业务闭环', '场景落地']).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
