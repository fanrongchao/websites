import React from 'react';
import { Link } from '@tanstack/react-router';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-top">
          <div>
            <p className="footer-kicker">XFA TECHNOLOGY</p>
            <h2 className="footer-logo">北京新方案科技有限公司</h2>
            <p className="footer-slogan">用平台能力、行业方法和持续交付，帮助企业构建可长期演进的数字化底座。</p>
          </div>
          <div className="footer-links">
            <Link to="/">首页</Link>
            <Link to="/" hash="capabilities">产品能力</Link>
            <Link to="/" hash="solutions">行业方案</Link>
            <Link to="/about">公司介绍</Link>
            <Link to="/contact">联系我们</Link>
          </div>
          <div className="footer-contact">
            <p>北京市朝阳区光华路9号光华路SOHO2期D座5-6</p>
            <p>wj@xfa.cn / g@xfa.cn</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 北京新方案科技有限公司</p>
          <p>数字中国新方案</p>
          <p>京ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
}
