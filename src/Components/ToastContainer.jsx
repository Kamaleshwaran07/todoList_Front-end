import React, { useState } from "react";


import error1 from '../assets/error1.gif'
import success from '../assets/success.gif'
import toast, { Toaster } from "react-hot-toast";

const ToastContainer = ({ responseMsg, errorMsg, show, setShow }) => {
  const notify = () => toast(responseMsg ? responseMsg : errorMsg);
 
    return (
      <div>
        {responseMsg ? (
          <>
            <div>
              <Toaster />
            </div>
          </>
        ) : (
          <>
            {" "}
            <div>
              <Toaster />
            </div>
          </>
        )}
      </div>
    );
  }


export default ToastContainer;
