import React from 'react';

const SOLUTIONS = [
  { title: "数字人力 (Digital HR)", subtitle: "组织管理、人事管理、招聘管理、考勤管理、培训管理、薪酬绩效管理、用工管理。", icon: "👥" },
  { title: "数字营销 (Digital Marketing)", subtitle: "市场营销活动管理、经营目标管理、客户管理、漏斗管理、合同管理、经销商管理、售后服务管理。", icon: "📈" },
  { title: "数字资产 (Digital Assets)", subtitle: "基础数据管理、资产采购管理、资产档案管理、资产日常管理、资产盘点管理、资产运行维护、资产报表管理。", icon: "🏢" },
  { title: "数字合同/法务 (Digital Contracts/Legal)", subtitle: "纠纷案件管理、律师律所管理、知识产权管理、法律咨询管理、AI法律助手、政策制度管理。", icon: "⚖️" },
  { title: "数字采购 (Digital Procurement)", subtitle: "物料管理、仓库管理、采购需求、招标管理、询比价管理、订单管理、供应商管理。", icon: "🛒" }
];

export function Solutions() {
  return (
    <section id="solutions" className="solutions section">
      <div className="section-header">
        <p className="section-kicker">行业解决方案</p>
        <h2 className="section-title">数字企业行业解决方案</h2>
        <p className="section-description">为企业数字化转型提供全方位行业垂直方案。</p>
      </div>
      <div className="solutions-grid">
        {SOLUTIONS.map((sol, idx) => (
          <div key={idx} className="solution-card">
            <div className="solution-icon">{sol.icon}</div>
            <h3 className="solution-title">{sol.title}</h3>
            <p className="solution-subtitle">{sol.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
