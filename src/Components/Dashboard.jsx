import React, { useEffect, useState } from "react";
// import Cookies from 'js-cookies'
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
// import CreateTodo from "./CreateTodo";
import tick from "../assets/check.png";
import axios from "axios";
import Loader from "./Loader";
import GetTodo from "./GetTodo";
import { format, formatDistance, parse } from "date-fns";
const Dashboard = ({ uniLoading, baseurl }) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [data, setData] = useState([]);
  // console.log(time);
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
  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchData();
  //   }, 1500);
  // }, [userId]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseurl}/gettodo/${userId}`);
      toast.success(res.data.message);
      setData(res.data.todo);
    } catch (error) {
      toast.error(error.res.data.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payloads = {
      title: title,
    };
    console.log(payloads);
    // Return a error if the deadline is in the past

    try {
      const res = await axios.post(`${baseurl}/createtodo`, payloads, {
        withCredentials: true,
      });
      console.log(res.data);
      toast.success(res.data.message);
      setTitle("")
      fetchData()
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
            <div className={uniLoading ? "hidden" : "visible relative"}>
              <h1 className="text-end me-3 mt-4">Welcome, {name}!</h1>
              <button type="button" onClick={fetchData} className=" me-5 top-0 left-12 absolute border-2 border-orange-500 p-1 rounded-xl">Fetch Todo</button>
              {/* <img src={notepad} alt="notepad" className="w-[40rem] h-[40rem] bg-[url('../assets/notepad.jpg')]" /> */}
              <form className="relative ml-[35%] mb-5 mr-0" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 justify-center">
                  <label className="sedan uppercase" name="title">
                    Title
                  </label>

                  <input
                    type="text"
                    name="title"
                    className="w-[30rem] h-16 border-2 bg-yellow-300/80 relative border-ashgray placeholder:text-black1 p-2 shadow-md"
                    placeholder="Take a note...."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />

                  <button className="btn absolute top-8 right-[29em] w-24" type="submit">
                    <img src={tick} className="w-12" alt="tick" />
                  </button>
                </div>
              </form>
              <section className="relative mt-6">

              <div className="flex flex-col-reverse absolute left-[40%] mt-12">
                {data.map((item, index) => {
                  return (
                    <div className="flex flex-col-reverse" key={index}>
                      <GetTodo baseurl={baseurl} userId={userId} item={item} fetchData= {fetchData} />
                    </div>
                  );
                  })}
              </div>
                </section>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
