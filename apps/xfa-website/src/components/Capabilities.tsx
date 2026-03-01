import React from 'react';

const CAPABILITIES = [
  { title: "AIOT智能物联网平台", description: "用于管理联网设备和工业互联网的智能物联网平台。", icon: "🌐" },
  { title: "数据治理平台", description: "用于管理和优化公司数据资产的工具。", icon: "📊" },
  { title: "业务协同平台", description: "促进内部和外部业务工作流程。", icon: "🤝" },
  { title: "哲思交付平台", description: "用于部署和管理企业应用程序的统一环境。", icon: "📦" }
];

export function Capabilities() {
  return (
    <section id="capabilities" className="capabilities section">
      <div className="section-header">
        <p className="section-kicker">产品能力</p>
        <h2 className="section-title">基础能力产品</h2>
        <p className="section-description">通过高效的实施服务助力客户实现业务升级。</p>
      </div>
      <div className="capabilities-grid">
        {CAPABILITIES.map((cap, idx) => (
          <div key={idx} className="capability-card">
            <div className="capability-icon">{cap.icon}</div>
            <h3 className="capability-title">{cap.title}</h3>
            <p className="capability-description">{cap.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
