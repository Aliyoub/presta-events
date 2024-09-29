import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav style={{display:'flex', width: '100%', color: '#FFFFFF', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', backgroundColor:'#0491FE'}} className="py-8">
        <ul className="container flex gap-10">
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
    </header>
  );
};

export default Header;
