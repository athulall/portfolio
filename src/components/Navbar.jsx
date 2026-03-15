import React from 'react'
import'./Navbar.css'
const Navbar = () => {
  return (
    <div>

      <nav
  className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm"
  style={{
    background: "radial-gradient(circle, #0D7377, #0F0F0F)",
  }}
>
  <div className="container">
    {/* Logo / Brand */}
    <a className="navbar-brand fw-bold text-uppercase" href="#home" style={{ color: "#14FFEC" }}>
      MyPortfolio
    </a>

    {/* Toggler button for mobile view */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Collapsible Nav Links */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link text-white" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#projects">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#skills">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar