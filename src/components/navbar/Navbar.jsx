"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loginData = localStorage.getItem("loginData");
    if (loginData) {
      const { username } = JSON.parse(loginData);
      setUsername(username);
    }
  }, []);
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link href={"/"}>
            <h2 className="navbar__logo">Finsweet</h2>
          </Link>
          <div className="navbar__menu">
            <div className="link__list">
              <Link href={"/"}>Home</Link>
              <Link href={"/category"}>Category</Link>
              <Link href={"/about"}>About</Link>
            </div>
            {username ? (
              <span className="userName">{username}</span>
            ) : (
              <Link href="/login">
                <button className="login__button">Login</button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
