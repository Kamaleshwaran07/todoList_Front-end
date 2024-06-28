import React, { useState } from "react";
import desktop from "../assets/desktop.jpg";
import axios from "axios";
import toast from "react-hot-toast";

const Contactus = ({baseurl}
) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


 const sendMail = async (e) =>{
  e.preventDefault();
  const payloads = {name, email, message}
  try {
  const response = await axios.post(`${baseurl}/sendemail`, payloads)
    toast.success(response.data.message)
  } catch (error) {
    toast.error(error.response.data.message);
  }
 }
        return (
          <div className="contactus h-screen xl:h-full lg:overflow-y-hidden">
      <div className="xl:w-full xl:h-[93.5vh] h-full lg:h-[92.6vh] text-papaya md:text-papaya bg-black1">
        <div className="flex p-2  mt-0 xl:h- h-full relative">
          <img
            src={desktop}
            alt=""
            className="w-screen max-lg:hidden xl:w-[45em] xl:h-[40em] lg:w-[35em] lg:h-[35em] h-full rounded-lg"
          />
          <div className="absolute h-screen lg:ms-auto lg:relative lg:text-papaya lg:w-[50%] lg:bg-transparent w-[98%] md:pl-1 p-3 rounded-lg">
            <h3 className="text-[2.2em] font-bold">Get in touch with us</h3>
            <p className="text-md font-normal mt-3">
              Feel free to reach out for more information.
            </p>
            <div className="w-full mt-3">
              <span className="me-3">
                <i className="me-2 bi bi-envelope-fill text-red1"></i>
                support@todoloo.com
              </span>
              <span className="me-2">
                <i className="me-2 bi bi-telephone-fill text-red1"></i>
                646-6565-656
              </span>
            </div>
            <form className="flex flex-col mt-3" onSubmit={sendMail}>
              <label className="font-semibold drop-shadow-sm md:text-ashgray mb-2 lg:text-ashgray uppercase " htmlFor="name">
                Name
              </label>
              <input
                type="text"
                autoComplete="off"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input h-12 md:placeholder:text-papaya placeholder:text-black1 xl:placeholder:text-papaya lg:placeholder:text-ashgray -ms-1"
                placeholder="Name"
              />
              <label className="font-semibold drop-shadow-sm md:text-ashgray mb-2 lg:text-ashgray mt-2 uppercase " htmlFor="email">
                Your email here
              </label>
              <input
                type="email"
                autoComplete="off"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="input h-12 md:placeholder:text-papaya placeholder:text-black1 xl:placeholder:text-papaya lg:placeholder:text-ashgray -ms-1"
                placeholder="E-mail"
              />
              <label className="font-semibold drop-shadow-sm md:text-ashgray mb-2 lg:text-ashgray mt-2 uppercase " htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                className="input h-40 md:h-36 md:placeholder:text-papaya placeholder:text-black1 xl:placeholder:text-papaya lg:placeholder:text-ashgray -ms-1"
                placeholder="Type in your message"
              ></textarea>
              <button
                type="submit"
                className="border-lg border-1 w-36 p-2 bg-black1 md:text-papaya rounded-lg mt-3"
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
