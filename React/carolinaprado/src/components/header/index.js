import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <div className='container'>
      <div className="logo">
        <a href='/'>
        <h1>
        Carolina <span>Prado</span>
        </h1>
        </a>
        
        </div>
      <div className="menu">
        <button
          className="hamburger"
          onClick={toggleMobileMenu}
          aria-label="Menu">
          ☰
        </button>

        <ul className={`menu-list ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href='/#top'>Início</a></li>
          <li><a href="/#skills" onClick={closeMobileMenu}>Skills</a></li>
          <li><a href="/#experiencia" onClick={closeMobileMenu}>Experiência</a></li>
          <li><a href="/#formacao" onClick={closeMobileMenu}>Formação</a></li>
          <li><Link to={{pathname:"/portfolio"}}>Portfólio</Link></li>
          <li><a href="/#contato" onClick={closeMobileMenu}>Contato</a></li>
        </ul>
      </div>
      </div>
     
    </header>
  );
}

export default Header;
