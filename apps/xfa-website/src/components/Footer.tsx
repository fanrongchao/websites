import React from 'react';

export function Footer() {
  return (
    <footer className="footer section">
      <div className="footer-container">
        <div className="footer-info">
          <h2 className="footer-logo">北京新方案 XFA TECHNOLOGY</h2>
          <p className="footer-slogan">数字中国新方案</p>
          <div className="contact-info">
            <p><strong>北京总部:</strong> 北京市朝阳区光华路9号光华路SOHO2期D座5-6</p>
            <p><strong>官方邮箱:</strong> wj@xfa.cn / g@xfa.cn</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 北京新方案科技有限公司. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
