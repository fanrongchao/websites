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
    <section className="section">
      <div className="section-header">
        <p className="section-kicker">公司介绍</p>
        <h2 className="section-title">关于北京新方案</h2>
        <p className="section-description">
          北京新方案科技有限公司致力于为企业数字化转型提供创新解决方案，通过高效的实施服务助力客户实现业务升级。
        </p>
      </div>
      <div className="content-box">
        <p>我们专注于数字人力、数字营销、数字资产、数字合同、数字法务和数字采购等多个领域。通过整合AIOT、数据治理和应用交付等核心平台，为企业打造全方位的数字化转型闭环。</p>
      </div>
    </section>
  )
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: () => (
    <section className="section">
      <div className="section-header">
        <p className="section-kicker">联系我们</p>
        <h2 className="section-title">获取您的数字化方案</h2>
        <p className="section-description">欢迎咨询我们的产品和服务。</p>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>北京总部</h3>
          <p>北京市朝阳区光华路9号光华路SOHO2期D座5-6</p>
        </div>
        <div className="contact-card">
          <h3>联系方式</h3>
          <p>官方邮箱: wj@xfa.cn / g@xfa.cn</p>
        </div>
      </div>
    </section>
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
