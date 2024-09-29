import React from "react";
import Image from "next/image";
import "./globals.css";

export default function BlocBeaute() {
  return (
  
  <div style={{borderRadius: 30, marginLeft:2, marginRight:2 }} className="blocBackgroundImage">
      {/* <Image
            src="/presta-events-images/beaute.jpg"
            alt="beaute"
            // className="dark:invert"
            width={500}
            height={24}
          /> */}
      <div
        style={{
          width: 500,
          height: 300,
          flex: 1,
          textAlign: "center",
          alignContent: "center",
          fontSize: 22,
          fontWeight: 700,
          color:'white'
        }}
      >
        Beauté
      </div>
    </div>
  );
}
