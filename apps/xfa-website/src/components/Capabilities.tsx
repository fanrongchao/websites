import React from 'react';

const CAPABILITIES = [
  { 
    title: "AIOT智能物联网平台", 
    description: "管理联网设备和工业互联网的智能中枢。", 
    icon: "🌐",
    className: "bento-large"
  },
  { 
    title: "数据治理平台", 
    description: "管理和优化公司数据资产的引擎。", 
    icon: "📊",
    className: "bento-medium"
  },
  { 
    title: "业务协同平台", 
    description: "促进内部和外部业务流转。", 
    icon: "🤝",
    className: "bento-wide"
  },
  { 
    title: "哲思交付平台", 
    description: "部署和管理企业应用的统一环境。", 
    icon: "📦",
    className: "bento-wide"
  }
];

export function Capabilities() {
  return (
    <section id="capabilities" className="section">
      <div className="section-header">
        <p className="section-kicker">Core Capabilities</p>
        <h2 className="section-title">核心产品能力</h2>
      </div>
      <div className="bento-grid">
        {CAPABILITIES.map((cap, idx) => (
          <div key={idx} className={`bento-item ${cap.className}`}>
            <div className="bento-icon">{cap.icon}</div>
            <h3 className="bento-title">{cap.title}</h3>
            <p className="bento-desc">{cap.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
