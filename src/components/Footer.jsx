import React from "react";
import "./footer.css";
import Logo from "../assets/Logo.svg";

export function Footer() {
  return (
    <footer id="foot">
      <div id="Fdiv1">
        <ul>
          <li>
            <a className="foot" href="#">
              Developed By
            </a>
          </li>
          <li>
            <a href="#">Tech used while development</a>
          </li>
          <li>
            <a href="#">AutoHire</a>
          </li>
          <li>
            <a href="#">React Js</a>
          </li>
          <li>
            <a href="#">GSAP</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
