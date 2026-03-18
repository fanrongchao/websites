import { Outlet, createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { Solutions } from './components/Solutions';
import { Footer } from './components/Footer';
import { slideContent } from './content/slideContent.generated';

const content = slideContent as typeof slideContent & {
  trusted?: { title: string; items: string[] };
  platform?: {
    kicker: string;
    heading: string;
    description: string;
    metrics: Array<{ title: string; value: string; description: string }>;
  };
  delivery?: {
    kicker: string;
    heading: string;
    summary: string;
    pillars: Array<{ title: string; description: string }>;
  };
  contact?: {
    kicker: string;
    heading: string;
    summary: string;
    details: Array<{ label: string; value: string }>;
  };
};

function TrustedRail() {
  const trusted = content.trusted ?? {
    title: '覆盖企业数字化关键链路',
    items: ['数据治理', 'AIOT平台', '业务协同', '数字采购', '数字法务', '持续交付']
  };

  return (
    <section className="section trusted-section">
      <div className="trusted-rail">
        <p>{trusted.title}</p>
        <div className="trusted-track">
          {trusted.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  const platform = content.platform ?? {
    kicker: 'The XFA Platform',
    heading: '加速平台建设、系统整合和场景落地',
    description: '以统一平台和方法论支持不同建设阶段，减少项目割裂，让能力沉淀成长期资产。',
    metrics: [
      { title: '更快整合', value: '2x', description: '通过统一平台能力减少重复建设与系统割裂。' },
      { title: '更低复杂度', value: '60%', description: '把高频场景沉淀成模块化能力与标准交付方法。' },
      { title: '更高交付效率', value: '90%', description: '以环境治理和方法论提升持续交付的节奏稳定性。' }
    ]
  };

  return (
    <section className="section section-surface">
      <div className="section-header">
        <p className="section-kicker">{platform.kicker}</p>
        <h2 className="section-title">{platform.heading}</h2>
        <p className="section-description">{platform.description}</p>
      </div>
      <div className="platform-grid platform-bento-grid">
        {platform.metrics.map((metric) => (
          <article key={metric.title} className="platform-card platform-bento-card">
            <p className="platform-card-label">{metric.title}</p>
            <strong>{metric.value}</strong>
            <p>{metric.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Delivery() {
  const delivery = content.delivery ?? {
    kicker: 'Latest from XFA',
    heading: '从平台、方案到内容体系的持续演进',
    summary:
      '北京新方案以平台能力为底、以行业场景为抓手、以持续交付为方法，把企业数字化建设从项目堆叠转向可复用、可运营、可持续演进的体系工程。',
    pillars: [
      { title: '平台先行', description: '优先沉淀共性能力，减少一次性项目开发和重复建设。' },
      { title: '场景闭环', description: '围绕关键经营场景设计业务闭环，而非孤立功能上线。' },
      { title: '持续交付', description: '以迭代节奏、环境治理和方法论保证系统长期稳定运行。' }
    ]
  };
  const { roadmap } = slideContent;

  return (
    <section className="section section-surface">
      <div className="delivery-shell delivery-bento">
        <div className="delivery-copy delivery-lead-card">
          <p className="section-kicker">{delivery.kicker}</p>
          <h2 className="section-title">{delivery.heading}</h2>
          <p>{delivery.summary}</p>
        </div>
        <div className="delivery-grid delivery-bento-grid">
          {delivery.pillars.map((pillar) => (
            <article key={pillar.title} className="delivery-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="roadmap-strip roadmap-bento-grid">
        {roadmap.map((item) => (
          <div key={item.title} className="roadmap-item">
            <span>{item.title}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section">
      <div className="cta-panel cta-bento">
        <div>
          <p className="section-kicker">Project Kickoff</p>
          <h2 className="section-title">让数字化建设从一次性项目，变成可持续演进的能力系统</h2>
        </div>
        <div className="cta-actions">
          <a href="/contact" className="btn btn-primary">预约沟通</a>
          <a href="/about" className="btn btn-secondary">了解公司</a>
        </div>
      </div>
    </section>
  );
}

function Shell() {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const rootRoute = createRootRoute({ component: Shell });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <>
      <Hero />
      <TrustedRail />
      <PlatformSection />
      <Capabilities />
      <Solutions />
      <Delivery />
      <FinalCta />
    </>
  )
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => {
    const { about, targetState } = slideContent;

    return (
      <div className="page-shell">
        <section className="section fade-up">
          <div className="section-header">
            <p className="section-kicker">{about.kicker}</p>
            <h2 className="section-title">{about.heading}</h2>
            <p className="section-description">{about.summary}</p>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <h3>我们的使命</h3>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="metric-panel">
              <div className="metric-grid">
                {about.metrics.map((metric) => (
                  <div key={metric.label}>
                    <h4>{metric.value}</h4>
                    <p>{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section section-surface">
          <div className="section-header">
            <p className="section-kicker">Target State</p>
            <h2 className="section-title">{targetState.headline}</h2>
            <p className="section-description">{targetState.narrative}</p>
          </div>
          <div className="delivery-grid">
            {targetState.items.map((item) => (
              <article key={item.title} className="delivery-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    );
  }
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: () => {
    const contact = content.contact ?? {
      kicker: 'Contact',
      heading: '让项目团队先理解你的业务场景',
      summary: '适合处于平台升级、流程重构、行业方案选型或交付体系优化阶段的组织与合作伙伴。',
      details: [
        { label: '北京总部', value: '北京市朝阳区光华路9号光华路SOHO2期D座5-6' },
        { label: '官方邮箱', value: 'wj@xfa.cn / g@xfa.cn' },
        { label: '沟通建议', value: '请描述业务场景、现状系统和希望优先解决的问题。' }
      ]
    };

    return (
      <div className="page-shell">
        <section className="section fade-up">
          <div className="section-header">
            <p className="section-kicker">{contact.kicker}</p>
            <h2 className="section-title">{contact.heading}</h2>
            <p className="section-description">{contact.summary}</p>
          </div>
          <div className="contact-grid">
            <div className="contact-stack">
              {contact.details.map((detail) => (
                <article key={detail.label} className="contact-card">
                  <p className="contact-card-label">{detail.label}</p>
                  <h3>{detail.value}</h3>
                </article>
              ))}
            </div>
            <div className="form-panel">
              <h3>发送需求概览</h3>
              <p>留下基本信息和业务背景，我们会按项目场景安排后续沟通。</p>
              <form className="contact-form">
                <div className="contact-form-row">
                  <input type="text" placeholder="您的姓名" />
                  <input type="email" placeholder="您的邮箱" />
                </div>
                <input type="text" placeholder="公司名称" />
                <input type="text" placeholder="业务场景 / 项目方向" />
                <textarea placeholder="当前系统现状、计划目标、希望优先解决的问题" rows={6}></textarea>
                <button type="button" className="btn btn-primary">提交咨询</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: () => (
    <div className="page-shell">
      <section className="section fade-up">
        <div className="section-header">
          <p className="section-kicker">Insights</p>
          <h2 className="section-title">行业洞察与技术分享</h2>
          <p className="section-description">博客板块仍在整理中，后续将承载数字化转型案例、平台实践和行业观察。</p>
        </div>
        <div className="blog-placeholder">
          <p>内容筹备中，后续开放。</p>
        </div>
      </section>
    </div>
  )
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, contactRoute, blogRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
