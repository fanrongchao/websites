import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { Solutions } from './components/Solutions';
import { Footer } from './components/Footer';

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
      <Capabilities />
      <Solutions />
    </>
  )
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => (
    <div className="fade-in">
      <section className="section">
        <div className="section-header">
          <p className="section-kicker">公司介绍</p>
          <h2 className="section-title">关于北京新方案</h2>
          <p className="section-description">
            数字中国新方案，引领企业数字化转型。
          </p>
        </div>
        <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h3>我们的使命</h3>
            <p>北京新方案科技有限公司致力于为企业提供创新、高效、可靠的数字化全栈解决方案。我们通过整合AIOT、数据治理和应用交付等核心平台，为企业打造全方位的数字化转型闭环。</p>
            <p>我们相信，数字化不仅是技术的升级，更是业务逻辑的重构。我们的目标是助力每一家企业实现从“流程驱动”向“数据驱动”的转变。</p>
          </div>
          <div style={{ background: 'var(--primary-light)', padding: '3rem', borderRadius: '24px' }}>
            <div className="stat-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', margin: '0' }}>100+</h4>
                <p style={{ margin: '0.5rem 0 0', fontWeight: '700' }}>成功案例</p>
              </div>
              <div>
                <h4 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', margin: '0' }}>10+</h4>
                <p style={{ margin: '0.5rem 0 0', fontWeight: '700' }}>核心产品</p>
              </div>
              <div>
                <h4 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', margin: '0' }}>24/7</h4>
                <p style={{ margin: '0.5rem 0 0', fontWeight: '700' }}>技术支持</p>
              </div>
              <div>
                <h4 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', margin: '0' }}>99%</h4>
                <p style={{ margin: '0.5rem 0 0', fontWeight: '700' }}>客户满意度</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: () => (
    <div className="fade-in">
      <section className="section">
        <div className="section-header">
          <p className="section-kicker">联系我们</p>
          <h2 className="section-title">获取您的数字化方案</h2>
          <p className="section-description">我们随时准备为您提供咨询服务，助力您的业务升级。</p>
        </div>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="contact-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ margin: '0 0 1rem' }}>📍 北京总部</h3>
              <p style={{ margin: '0', color: 'var(--text-light)' }}>北京市朝阳区光华路9号光华路SOHO2期D座5-6</p>
            </div>
            <div className="contact-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ margin: '0 0 1rem' }}>✉️ 官方邮箱</h3>
              <p style={{ margin: '0', color: 'var(--text-light)' }}>wj@xfa.cn / g@xfa.cn</p>
            </div>
          </div>
          <div style={{ background: 'white', padding: '3rem', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
            <h3>发送信息</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <input type="text" placeholder="您的姓名" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
                <input type="email" placeholder="您的邮箱" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
              </div>
              <input type="text" placeholder="公司名称" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
              <textarea placeholder="您的需求或咨询内容" rows={5} style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}></textarea>
              <button type="button" className="btn btn-primary" style={{ width: 'fit-content' }}>提交咨询</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: () => (
    <section className="section">
      <div className="section-header">
        <p className="section-kicker">博客动态</p>
        <h2 className="section-title">行业洞察与技术分享</h2>
        <p className="section-description">获取最新的数字化转型动态和案例分享。</p>
      </div>
      <div className="blog-placeholder">
        <p>正在努力更新中...</p>
      </div>
    </section>
  )
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, contactRoute, blogRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
