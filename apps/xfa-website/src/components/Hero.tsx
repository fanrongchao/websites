import React from 'react';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-dots"></div>
      <div className="hero-content">
        <h1 className="hero-title">数字中国新方案</h1>
        <p className="hero-description">
          致力于为企业数字化转型提供创新解决方案
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <a href="#capabilities" className="btn btn-primary">进入产品领域</a>
          <a href="/about" className="btn btn-secondary">关于我们</a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>SCROLL DOWN</span>
        <div className="chevron">⌄</div>
      </div>
    </section>
  );
}
