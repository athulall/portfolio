import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <div>
  <footer className="footer">
      <div className="footer-socials">
        <a href="https://github.com/athulall" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/athul-lal-vl" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:athullal77@gmail.com">
          <FaEnvelope />
        </a>
        
      </div>
      <p>© 2025 Athul | Full Stack Developer</p>
    </footer>

        
       

    </div>
  )
}

export default Footer  






























































































































// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/athulall/portfolio.git
// git push -u origin main
