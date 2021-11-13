import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div class="container">
        <Link href="/">
          <a class="navbar-brand">Navbar</a>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link href="/">
                <a class="nav-link">Home</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/blogs">
                <a class="nav-link">Blogs</a>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
