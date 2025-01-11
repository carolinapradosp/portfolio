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
          <li><Link to={'/#top'} onClick={closeMobileMenu}>Início</Link></li>
          <li><Link to={'/#skills'} onClick={closeMobileMenu}>Skills</Link></li>
          <li><Link to={'/#experiencia'} onClick={closeMobileMenu}>Experiência</Link></li>
          <li><Link to={'/#formacao'} onClick={closeMobileMenu}>Formação</Link></li>
          <li><Link to={{pathname:"/portfolio"}}>Portfólio</Link></li>
          <li><Link to={'/#contato'} onClick={closeMobileMenu}>Contato</Link></li>
        </ul>
      </div>
      </div>
     
    </header>
  );
}

export default Header;
