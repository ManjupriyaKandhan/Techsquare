import React from 'react';
import './navbar.css';
import logo from '../images/logo.jpeg';




function Navbar() {
  return (

    <>
    <div className='hero'>
    
    <nav class="navbar navbar-expand-lg bg-body-dark">
  <div class="container-fluid">
  <img src={logo} alt="Brand Logo" class="logo"/>
    <a class="navbar-brand" href="#">Tech Square Consultancy Services</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Job Seekers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Employers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>


    </>
  )
}

export default Navbar