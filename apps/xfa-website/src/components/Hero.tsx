import React from 'react';

export function Hero() {
  return (
    <section className="hero">
      <div className="mesh-bg">
        <div className="mesh-grid"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">北京新方案 XFA TECHNOLOGY</div>
        <h1 className="hero-title">数字中国新方案</h1>
        <p className="hero-description">
          致力于为企业数字化转型提供创新解决方案，通过 AIOT、数据治理及哲思交付平台助力业务升级。
        </p>
        <div className="hero-actions">
          <a href="#capabilities" className="btn btn-white">开始探索</a>
          <a href="/about" className="btn btn-outline">联系专家</a>
        </div>
      </div>
    </section>
  );
}
