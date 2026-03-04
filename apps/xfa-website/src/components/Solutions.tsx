import React from 'react';

const SOLUTIONS = [
  { 
    title: "数字人力 (Digital HR)", 
    description: "覆盖组织、人事、招聘、考勤、培训、薪酬绩效及用工管理。" 
  },
  { 
    title: "数字营销 (Digital Marketing)", 
    description: "全链路营销、客户、合同、经销商及售后服务管理。" 
  },
  { 
    title: "数字资产 (Digital Assets)", 
    description: "从采购到报表的资产全生命周期运维管理。" 
  },
  { 
    title: "数字合同/法务 (Digital Contracts/Legal)", 
    description: "纠纷、案件、知识产权管理及 AI 法律助手。" 
  },
  { 
    title: "数字采购 (Digital Procurement)", 
    description: "物料、仓库、招标、订单及供应商全体系管控。" 
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="section">
      <div className="section-header">
        <p className="section-kicker">Industry Solutions</p>
        <h2 className="section-title">数字企业行业解决方案</h2>
      </div>
      <div className="solutions-list">
        {SOLUTIONS.map((sol, idx) => (
          <div key={idx} className="solution-row">
            <h3 className="solution-title">{sol.title}</h3>
            <p className="solution-desc">{sol.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
