import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ComingSoon = () => {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState("");

  var validator = require("email-validator");

  const handleEmailState = (e) => {
    setEmailAddress(e.target.value);
    console.log(e.target.value);
  };
  const navigateTo = () => {
    navigate("/thankyou");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validator.validate(emailAddress)) {
      const response = await fetch(`http://localhost:5001/api/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailAddress: emailAddress }),
      })
        .then(console.log("Login successful"))
        .then(navigate("/thankyou"));
    } else {
      alert("Email address is not validated, try again");
    }
  };
  return (
    <div className="bg-[#FCF2E6] flex h-screen items-center pl-28 ">
      <div className="absolute left-[5rem] top-0 bottom-24 right-0 z-0 flex items-center text-[22rem] opacity-70 text-[#C599B0]">
        KITCHED
      </div>
      <div className="flex flex-col z-10 space-y-7">
        <div className="text-[#721960] text-[4rem] font-bold tracking-[-0.1rem] ">
          Coming Soon
        </div>
        <div className="text-[#721960] text-[2rem]">
          Elevate your routine. Sign up to be notified of all things cooking!
        </div>
        <div>
          <input
            onChange={(e) => handleEmailState(e)}
            value={emailAddress}
            placeholder="johnsmith@gmail.com"
            className="w-[400px] h-12 bg-zinc-300 p-3 rounded-[30px] border border-[#721960]"
          />
          <button
            className="bg-[#721960] text-white p-3 px-5 rounded-[30px]"
            onClick={(e) => handleSubmit(e)}
          >
            Let's Get Kitched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
