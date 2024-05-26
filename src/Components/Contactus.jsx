import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import woman1 from "../assets/woman1.jpg";
import woman2 from "../assets/woman2.png";
import man from "../assets/man.jpg";
import desktop from "../assets/desktop.jpg";
import woman from "../assets/woman1.png";
import woman3 from "../assets/woman3.jpg";

const Contactus = () => {
  return (
    <div>
      <div className="container-fluid text-white bg-black1">
        <div className="flex p-6 mt-0 ml-6">
          <img src={desktop} alt="" className="w-[35em] rounded-lg" />
          <div className="ml-12">
            <h3 className="text-[3.2em] font-bold">Get in touch with us</h3>
            <p className="text-md font-normal mt-3">
              Feel free to reach out for more information.
            </p>
            <div className="w-full mt-3">
              <span className="me-3">
                <i class="me-2 bi bi-envelope-fill text-red1"></i>
                support@todoloo.com
              </span>
              <span className="me-2">
                <i class="me-2 bi bi-telephone-fill text-red1"></i>
                646-6565-656
              </span>
            </div>
            <form className="flex flex-col mt-3">
              <label className="" name="name">
                Name
              </label>
              <input
                type="text"
                autocomplete="off"
                name="name"
                class="input h-12"
                placeholder="Name"
              />
              <label className="" name="email">
                Your email here
              </label>

              <input
                type="email"
                autocomplete="off"
                name="email"
                class="input h-12"
                placeholder="E-mail"
              />
              <label className="" name="email">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                class="input h-48"
                placeholder="Type in your message"
              ></textarea>
              <button
                type="submit"
                className="border-lg border-1 w-36 p-2 bg-red1 text-white rounded-lg mt-3"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
