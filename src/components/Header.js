// src/components/Header
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Chatbot Portfolio</h1>
        <nav className="nav" role="navigation" aria-label="메인 내비게이션">
          <ul className="nav-list">
            <li><a href="#home" className="nav-item">홈</a></li>
            <li><a href="#about" className="nav-item">소개</a></li>
            <li><a href="#contact" className="nav-item">연락처</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
