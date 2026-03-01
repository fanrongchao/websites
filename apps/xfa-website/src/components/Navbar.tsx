import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          北京新方案
          <span>XFA TECHNOLOGY</span>
        </Link>
        <button 
          className="navbar-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>首页</Link></li>
          <li><a href="#capabilities" onClick={() => setIsOpen(false)}>产品能力</a></li>
          <li><a href="#solutions" onClick={() => setIsOpen(false)}>行业解决方案</a></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>公司介绍</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>联系我们</Link></li>
        </ul>
      </div>
    </nav>
  );
}
