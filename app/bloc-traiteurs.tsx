import React from 'react'
import Image from "next/image";
import "./globals.css";

export default function BlocTraiteurs() {
  return (
    <div style={{borderRadius: 30, marginLeft:2, marginRight:2 }} className="BlocTraiteurs_BackgroundImage">
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
      Traiteurs
    </div>
  </div>
  )
}

