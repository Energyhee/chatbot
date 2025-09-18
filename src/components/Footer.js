// src/components/Footer
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Han Changhee. All rights reserved.</p>
        <nav>
          <a 
            href="https://" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="한창희의 GitHub 프로필"
          >
            GitHub
          </a>
          {" | "}
          <a 
            href="https://" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="한창희의 Notion"
          >
            Notion
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
