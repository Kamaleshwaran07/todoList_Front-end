import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import woman1 from '../assets/woman1.jpg'
import woman2 from '../assets/woman2.png'
import man from "../assets/man.jpg";
import desktop from '../assets/desktop.jpg'
import woman from '../assets/woman1.png'
import woman3 from '../assets/woman3.jpg'

const Home = () => {
  

 
    return (
      <div>
        {/* Hero Section */}
        <div className="grid grid-cols-3 hero gap-4">
          <div className="heroHead absolute mt-56 ml-20 p-3 shadow-lg bg-white/30 flex flex-col h-52 w-[30rem]">
            <h3 className="text-3xl uppercase font-bold text-">Todoloo</h3>
            <p className="text-xl mt-6 text-slate-100">
              Welcome to our Todo list site! Stay organized, productive, and
              focused on your tasks.
            </p>
          </div>
        </div>
        {/*Our Story */}
        <div className="bg-[#1e1e1e] h-[30em] pt-36 text-white">
          <div className="flex hero2 ms-[25em]">
            <h4 className="text-3xl">
              Our
              <br /> Story
            </h4>
            <div className="w-[40em] ms-12">
              <h3 className="text-2xl">TodoLoo</h3>
              <p className="text-md font-normal mt-6 text-slate-300">
                TodoLoo isn't just a typical todo list website, it's a hub of
                innovation dedicated to enhancing your organization and
                productivity. By offering advanced tools, personalized
                assistance, and a stimulating environment, our goal is to assist
                you in achieving your tasks efficiently and surpassing your
                objectives. Whether you're a seasoned planner or just starting
                your productivity journey, we welcome you to join us on the path
                towards a more organized and fulfilling life.
              </p>
            </div>
          </div>
        </div>
        {/*Testimonials */}
        <div
          id="carouselExampleAutoplaying"
          class="carousel slid  h-[20em] relative mx-auto bg-black"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner pt-24 relative mx-auto my-auto flex justify-center">
            <div class="carousel-item w-[40em] active mr-[-10%]">
              <div className="flex items-center justify-center">
                <img
                  src={woman}
                  class="rounded-full w-32 h-32 me-3"
                  alt="..."
                />
                <div className="">
                  <h1 className="text-xl text-red2">Sarah Johnson</h1>
                  <p className="text-normal font-normal text-grey1 mt-2">
                    "TodoLoo transformed my task management approach! The
                    animations are fantastic, and the platform keeps me
                    motivated to accomplish my goals. I feel more organized and
                    productive than ever."
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item w-[40em] mr-[-10%]">
              <div className="flex items-center justify-center">
                <img src={man} class="rounded-full w-32 h-32 me-3" alt="..." />
                <div>
                  <h1 className="text-red1 text-xl">Lucas Evans</h1>
                  <p className="text-normal font-normal text-grey1 mt-2">
                    "TodoLoo is a game-changer! The interactive features make
                    task management enjoyable, and the community aspect is
                    incredibly supportive. I'm motivated to stay on top of my
                    tasks like never before."
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item w-[40em] mr-[-10%]">
              <div className="flex items-center justify-center">
                <img
                  src={woman3}
                  class="rounded-full w-48 h-32 me-3"
                  alt="..."
                />
                <div>
                  <h1 className="text-red1 text-xl">Emma Phillman</h1>
                  <p className="text-normal font-normal text-grey1 mt-2">
                    "Obsessed with this todo list platform! The animated
                    reminders are a game-changer, and the collaboration tools
                    have revolutionized how I work with others. It's a must-have
                    for staying organized and efficient."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* Hero 2*/}
        <div className="h-[15em] w-full flex items-center justify-center text-red1 font-semibold bg-[#f7edee]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-red1 me-2"
          >
            <path
              fill-rule="evenodd"
              d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
              clip-rule="evenodd"
            />
          </svg>
          Your path to organized task management and increased productivity
        </div>
        {/*Contact Us*/}
        <div className="relative container-fluid text-white bg-black1">
          <div className="flex p-6 ml-6">
            <img src={desktop} alt="" className="w-[35em] rounded-lg" />
            <div className="absolute right-[8em]">
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

export default Home;