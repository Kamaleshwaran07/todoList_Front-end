import React, { useEffect, useState } from "react";
// import Cookies from 'js-cookies'
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
// import CreateTodo from "./CreateTodo";
import tick from "../assets/check.png";
import axios from "axios";
import Loader from "./Loader";
import GetTodo from "./GetTodo";
import { format, parse } from "date-fns";
const Dashboard = ({ uniLoading, baseurl }) => {
  const [title, setTitle] = useState("");
  const [dd, setDD] = useState("");
  const [mm, setMM] = useState("");
  const [yyyy, setYYYY] = useState("");
  const [name, setName] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    try {
      // Get the cookie
      const cookie = document.cookie;

      if (cookie) {
        // Decode the JWT token
        const decoded = jwtDecode(cookie);
        setName(decoded.name);
        console.log(name);
        setUserId(decoded.id);
        console.log(userId);
      }
    } catch (error) {
      console.error("Error decoding JWT:", error);
    }
  }, []);
  {/*Date Comparison for deadline*/}
  const deadline = `${dd}-${mm}-${yyyy}`
  const datefns = format(new Date(), 'dd-MM-yyyy')
  const deadlineDate = parse(deadline, 'dd-MM-yyyy', new Date());
  const currentDate = parse(datefns, 'dd-MM-yyyy', new Date());
  const comparison =  currentDate < deadlineDate
  // console.log(comparison);

  //Handling the form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payloads = {
      title: title,
      deadline:deadline
    };
    // Return a error if the deadline is in the past
    if(comparison === false){
     return toast.error("deadline cannot be in the past")
    }
    
    try {
      const res = await axios.post(`${baseurl}/createtodo`, payloads, {
        withCredentials: true,
      });
      toast.success(res.data.message);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        toast.error(error.response.data?.message || "An error occurred");
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        toast.error("No response from server");
        console.error("Request error:", error.request);
      } else {
        // Something else happened in setting up the request
        toast.error("Error setting up request");
        console.error("Setup error:", error.message);
      }
      // toast.error(error.response.data.message)
    }
  };
  

  return (
    <div>
      {uniLoading ? (
        <Loader />
      ) : (
        <>
          {name === null ? (
            <>
              <div className="text-red-600 grid grid-cols-1 justify-items-center relative mt-[20%]">
                <div className="">
                  User Data Not Available.
                  <a
                    className="underline underline-offset-4 sedan-italic text-bold  text-2xl"
                    href="/signup"
                  >
                    Login Again
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className={uniLoading ? "hidden" : "visible "}>
              <h1 className="text-end me-3 mt-4">Welcome, {name}!</h1>
              {/* <img src={notepad} alt="notepad" className="w-[40rem] h-[40rem] bg-[url('../assets/notepad.jpg')]" /> */}
              <form className="" onSubmit={handleSubmit}>
                <div className="relative flex flex-col gap-2 justify-center container">
                  <label className="sedan uppercase" name="title">
                    Title
                  </label>

                  <input
                    type="text"
                    name="title"
                    className="w-[30rem] h-16 border-2 bg-yellow-300/80 border-ashgray placeholder:text-black1 p-2 shadow-md"
                    placeholder="Take a note...."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                  <label className="sedan uppercase" name="">
                    Deadline
                  </label>
                  <div>
                    <input
                      type="text"
                      name="dd"
                      className="w-[3rem] h-12 border-2 bg-yellow-300/80 border-ashgray placeholder:text-black1 p-2 shadow-md"
                      placeholder="dd"
                      value={dd}
                      onChange={(e) => setDD(e.target.value)}
                      required
                      maxLength={2}
                    />
                    <input
                      type="text"
                      name="mm"
                      className="w-[4rem] h-12 border-2 bg-yellow-300/80 border-ashgray placeholder:text-black1 p-2 shadow-md"
                      placeholder="mm"
                      value={mm}
                      onChange={(e) => setMM(e.target.value)}
                      maxLength={2}
                      required
                    />
                    <input
                      type="text"
                      name="yyyy"
                      className="w-[4rem] h-12 border-2 bg-yellow-300/80 border-ashgray placeholder:text-black1 p-2 shadow-md"
                      placeholder="yyyy"
                      value={yyyy}
                      onChange={(e) => setYYYY(e.target.value)}
                      maxLength={4}
                      required
                    />
                  </div>

                  <button className="btn w-24" type="submit">
                    <img src={tick} className="w-12" alt="tick" />
                  </button>
                </div>
              </form>
              <div>
                <GetTodo baseurl={baseurl} userId={userId} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
