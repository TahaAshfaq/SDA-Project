import React from "react";
import Logo from "../assets/Logo.svg";
import "./header.css";

export function Header() {
  return (
    <header className="mainHeader">
      <div className="headabove">
        <p>Unlock your potential with ATS: Where talent meets opportunity!</p>
      </div>
      <div className="head">
        <img src={Logo} alt="" />
        <button className="intButton">INTERVIEWER</button>
      </div>
    </header>
  );
}
