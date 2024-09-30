"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          width: "100%",
          color: "#FFFFFF",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#0491FE",
        }}
        className="py-6"
      >
        <ul className="ul_style">
          {/* <ul className="container flex gap-10"> */}
          <li>
            <Link href={"/"}>Accueil</Link>
          </li>
          <li>
            <Link href={"/mariages"}>Mariages</Link>
          </li>
          <li>
            <Link href={"/anniversaires"}>Anniversaires</Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .ul_style {
          display: flex;
          // width: 50%;
          // border: 1px solid #6FAFE3;
          // padding: 20px
        }
        .ul_style li{
          padding: 0 10px;
          // border-right: 1px solid #6FAFE3;
          // background: #6FAFE3;
        }
      `}</style>
    </header>
  );
};

export default Header;
