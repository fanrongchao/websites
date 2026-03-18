import React, { useEffect, useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(globalThis.window.scrollY > 24);
    };

    handleScroll();
    globalThis.window.addEventListener('scroll', handleScroll);

    return () => globalThis.window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navbarClass = `navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`;

  return (
    <nav className={navbarClass}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <span className="navbar-logo-mark">XFA</span>
          <span className="navbar-logo-text">
            北京新方案
            <small>XFA TECHNOLOGY</small>
          </span>
        </Link>
        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>首页</Link></li>
          <li><Link to="/" hash="capabilities" onClick={() => setIsOpen(false)}>产品能力</Link></li>
          <li><Link to="/" hash="solutions" onClick={() => setIsOpen(false)}>行业方案</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>公司介绍</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>联系我们</Link></li>
        </ul>
        <Link to="/contact" className="navbar-cta" onClick={() => setIsOpen(false)}>
          项目咨询
        </Link>
      </div>
    </nav>
  );
}
