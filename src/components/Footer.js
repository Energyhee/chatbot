// src/components/Footer
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Han Changhee. All rights reserved.</p>
        <nav>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Han Changhee의 GitHub 프로필"
          >
            GitHub
          </a>
          {" | "}
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Han Changhee의 LinkedIn 프로필"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
