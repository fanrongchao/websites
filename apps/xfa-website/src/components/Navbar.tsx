import React, { useState, useEffect } from 'react';
import { Link, useLocation } from '@tanstack/react-router';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(globalThis.window.scrollY > 50);
    };
    globalThis.window.addEventListener('scroll', handleScroll);
    return () => globalThis.window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClass = `navbar ${scrolled || !isHome ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`;

  return (
    <nav className={navbarClass}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          北京新方案
          <span>V2</span>
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
          <li><Link to="/" hash="capabilities" onClick={() => setIsOpen(false)}>产品能力</Link></li>
          <li><Link to="/" hash="solutions" onClick={() => setIsOpen(false)}>行业解决方案</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>公司介绍</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>联系我们</Link></li>
        </ul>
      </div>
    </nav>
  );
}
