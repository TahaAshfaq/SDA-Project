import React, { useState } from "react";
import "./Alreadyacc.css";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
// import { set } from "mongoose";

export function Alreadyacc() {
  // const [err, setErr] = useState(false);
  // const [email, setEmail] = useState("");
  // const submission = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:2000/auth");
  //     const data = response.data;
  //     data.forEach((e) => {
  //       if (email == e.email) {
  //         setErr(true);
  //         if (err) {
  //           navigator("/yscreen");
  //         }
  //       } else {
  //         setErr(false);
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="ac_mainuserSignup">
      <div className="ac_maindiv">
        <img src={Logo} alt="" />
        <form className="ac_actualform">
          <h5>Email</h5>
          <input
            type="email"
            // value={value}
            className="ac_forminput"
            // onChange={() => setEmail(value)}
          />

          <h5 id="pass">Password</h5>
          <input type="password" className="ac_forminput" />
        </form>
        <p>
          Don't have an <span id="ac_useraccount">account</span>
        </p>
        <div className="ac_buttons">
          <Link to="/Yscreen">
            <button type="submit" id="ac_UserSignUpB2">
              Go to my workspace
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
