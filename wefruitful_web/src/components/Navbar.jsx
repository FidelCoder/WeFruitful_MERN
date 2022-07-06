import React from "react";

const Navbar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light shadow">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="gr.com">WeFruitful</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="gr.com">Services</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="gr.com">About Us</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="gr.com">Blog</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="gr.com">Get Certified</a>
        </li>

      </ul>
      <a class="navbar-brand" href="griffins.com">Connect To Wallet</a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;