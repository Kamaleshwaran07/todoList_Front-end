import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import yuppassword from 'yup-password'
import Loader from './Loader.jsx'
// import Cookies from 'js-cookies'
// import {jwtDecode} from 'jwt-decode'
// import ToastContainer from './ToastContainer';


const Signup = ({baseurl, setIsAuthenticated}) => {
  const [data, setData] = useState({
    email: '',
    name: '',
    password: '',
  })
const [show, setShow] = useState(true);
  yuppassword(yup)
  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
        "Invalid email"
      )
      .required("Email is required"),
    name: yup.string().required("Name is required"),
    password: yup
      .string()
      .min(6, "Password must contain atleast 6 characters")
      // .required()
      // .min(
      //   8,
      //   <ul className="list-disc text-slate-500">
      //     Your password must contain 8 or more characters with at least one of
      //     each:
      //     <li>Uppercase,</li>
      //     <li>Lowercase,</li>
      //     <li>Number and</li>
      //     <li>Special character</li>
      //   </ul>
      // )
      // .minUppercase(1, "Password must contain at least 1 uppercase letter")
      // .minLowercase(1, "Password must contain at least 1 lowercase letter")
      // .minSymbols(1, "Password must contain at least 1 special character")
      // .minNumbers(1, "Password must contain at least 1 number")
      .required("Password is required"),
    confirmpassword: yup.string().required("Retype your password")
  });
  
  
  const signupformik = useFormik(({
    initialValues: data,
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${baseurl}/signup`, values)
        data()
        toast.success(response.data.message)
      } catch (error) {
        toast.error(error.response.data.message)
      }
    
    }
  }
)
  )
  const navigate = useNavigate()
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
        "Invalid email"
      )
      .required("Email is required"),
    password: yup
      .string().required("Password is required")
  })
  const loginFormik = useFormik(({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        
      const response = await axios.post(`${baseurl}/login`, values)
      setIsAuthenticated(true)
      toast.success(response.data.message)
      setIsLoading(true)
      const token = response.data.token;
      const expires = new Date(new Date(Date.now() + 24 * 60 * 60 * 1000)).toUTCString()
      document.cookie = `token = ${token}; path=/; expires=${expires} `
      setTimeout(() => {
        setIsLoading(false)
        navigate("/dashboard");
      }, 1500);
} catch (error) {
        // setErrorMsg(error.response.data.message)
        // console.log(error.response.data.message);
        toast.error(error.response.data.message)
}

    }
}))   

  const handleConfirmPassword = () => {
    if (signupformik.values.password !== signupformik.values.confirmpassword) {
      toast.error("Password doesn't match")
    }
  }
  const [isLoading, setIsLoading] = useState(false)
  // handleConfirmPassword()
    return (
      <div>
      {

        isLoading ?
        <>
        <Loader /> 

        </>
        :
      <div className="row flex-row mr-0">
        <div>
          <Toaster />
        </div>

        {/**Sign Up Page */}
        <div className="container sedan ml-auto mr-auto relative">
          <div
            id="box"
            className="row relative ml-auto mr-auto  bg-black1 text-ashgray mt-20 w-[55em] h-[25em] md:w-[40em]"
          >
            <div
              className={
                show
                  ? "col-4 mt-32 pl-12 md:pl-6 md:translate-x-[24em] translate-x-[32rem]  transition-transform  duration-500"
                  : "col-6 md:pl-16 mt-32 pl-32 translate-x-[-2rem]  transition-transform  duration-500"
              }
            >
              {show ? (
                <div className="">
                  <h4 className="text-2xl">Have an account?</h4>
                  <p>Login to Your account</p>
                  <button
                    id="button"
                    className="btn w-24 shadow-slate-300 font-bold uppercase shadow-md bg-magenta1 mt-8 text-papaya"
                    onClick={() => {
                      // setShow(!show)
                      setTimeout(() => setShow(!show), 100);
                    }}
                  >
                    Login
                  </button>
                </div>
              ) : (
                <div className="">
                  <h4 className="text-2xl">Don't Have an account?</h4>
                  <p>Sign up here</p>
                  <button
                    id="button"
                    className="btn w-24 shadow-slate-300 bg-papaya font-bold uppercase shadow-md mt-8 text-magenta1 md:text-magenta1 md:bg-papaya"
                    onClick={() => {
                      setTimeout(() => setShow(!show), 100);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
            <div
              id="formContainer"
              className={
                show
                  ? "col-5 h-[28.5em] col-md-6 md:translate-x-[-12em] pt-3 pl-6 bg-papaya top-[-2em] absolute text-black right-24 translate-x-[-24em] transition-transform  duration-500 "
                  : "col-5 h-[30em] md:h-[29em] col-md-6 md:translate-x-[3em] pt-12 pl-6 bg-papaya top-[-2em] absolute text-black right-24 translate-x-[2em] transition-transform  duration-500 "
              }
            >
              {show ? (
                <>
                  <h4 className="pb-3 fs-4 font-bold">Sign Up</h4>
                  <form
                    className="flex flex-col"
                    onSubmit={signupformik.handleSubmit}
                  >
                    <div className="relative">
                      <label className="font-bold text-black1" name="email">
                        E-mail:
                      </label>

                      <br />
                      <div className="text-red-500 float-right absolute right-0 top-0 font-bold italic">
                        {signupformik.errors.email}
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="input h-12 md:w-[17em] w-[20em]"
                        placeholder="E-mail"
                        onChange={signupformik.handleChange}
                        value={signupformik.values.email}
                      />
                    </div>
                    <div className="relative mt-1">
                      <label className="font-bold text-black1" name="name">
                        Name:
                      </label>
                      <br />
                      <div className="text-red-500 float-right absolute right-0 top-0 font-bold italic">
                        {signupformik.errors.name}
                      </div>
                      <input
                        name="name"
                        type="text"
                        className="input h-12 md:w-[17em] w-[20em]"
                        placeholder="Name"
                        onChange={signupformik.handleChange}
                        value={signupformik.values.name}
                      />
                    </div>
                    <div className="relative mt-1">
                      <label className="font-bold text-black1" name="password">
                        Password
                      </label>

                      <br />
                      <div className="text-red-500 float-right absolute right-0 top-0 font-bold italic">
                        {signupformik.errors.password}
                      </div>
                      <input
                        type="text"
                        name="password"
                        className="input h-12 md:w-[17em] w-[20em]"
                        placeholder="Password"
                        onChange={signupformik.handleChange}
                        value={signupformik.values.password}
                      />
                    </div>
                    <div className="mt-1 relative">
                      <label className="" name="confirmpassword">
                        Confirm your Password
                      </label>

                      <br />
                      <div className="text-red-500 float-right absolute right-0 top-0 font-bold italic">
                        {signupformik.errors.confirmpassword}
                      </div>
                      <input
                        type="text"
                        value={signupformik.values.confirmpassword}
                        name="confirmpassword"
                        className="input h-12 w-[20em] md:w-[17em]"
                        placeholder="Re-type your Password"
                        onChange={signupformik.handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-24 mt-4 md:left-1 shadow-sm h-8 bg-black text-white rounded-md relative left-52"
                      onClick={handleConfirmPassword}
                    >
                      Submit
                    </button>
                  </form>
                </>
              ) : (
                <>
                  {/* loginPage */}
                  <form
                    className="flex flex-col "
                    onSubmit={loginFormik.handleSubmit}
                  >
                    <h4 className="pb-12 fs-4 font-bold">Login</h4>
                    <div>
                      <label className="font-bold text-black1" name="email">
                        E-mail:
                      </label>

                      <br />
                      <input
                        type="email"
                        name="email"
                        className="input h-12 w-[20em] md:w-[17em]"
                        placeholder="E-mail"
                        onChange={loginFormik.handleChange}
                        value={loginFormik.values.email}
                      />
                      <div className="text-red-500">{loginFormik.errors.email}</div>
                    </div>

                    <div>
                      <label className="font-bold text-black1" name="password">
                        Password
                      </label>

                      <br />
                      <input
                        type="password"
                        name="password"
                        className="input h-12 w-[20em] md:w-[17em]"
                        placeholder="Password"
                        onChange={loginFormik.handleChange}
                        value={loginFormik.values.password}
                      />
                      <div className="text-red-500">
                        {loginFormik.errors.password}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-24 mt-6 shadow-sm h-8 bg-black text-white rounded-md"
                      
                    >
                      Submit
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/*Login Page */}
        {/* <div className={!show && "container col-6"}>
          <div
            id="box"
            className="row ml-24 relative bg-black text-white mt-20 w-[60em] h-[25em]"
          >
            <div
              className={
                !show
                && "col-4 mt-32 pl-20 translate-x-[2rem] transition-transform delay-300 duration-1000"
              }
            >
              <h4>Don't Have an account?</h4>
              <p>Sign up here</p>
              <button
                id="button"
                className="btn w-24 shadow-slate-300 shadow-md mt-8 text-white"
                onClick={() => setShow(!show)}
              >
                Sign Up
              </button>
            </div>
            <div
              id="formContainer"
              className={
                !show
                 && "col-5 h-[30em] p-10 bg-white top-[-2em] absolute text-black right-24 translate-x-[1em] transition-transform delay-300 duration-1000"
              }
            >
              <form className="flex flex-col" onSubmit={formik.handleSubmit}>
                <h4>Login</h4>
                <div>
                  <label className="" name="email">
                    E-mail:
                  </label>

                  <br />
                  <input
                    type="email"
                    name="email"
                    className="input h-12 w-[20em]"
                    placeholder="E-mail"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <div className="text-red-500">{formik.errors.email}</div>
                </div>

                <div>
                  <label className="" name="password">
                    Password
                  </label>

                  <br />
                  <input
                    type="password"
                    name="password"
                    className="input h-12 w-[20em]"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <div className="text-red-500">{formik.errors.password}</div>
                </div>

                <button
                  type="submit"
                  className="w-24"
                  onClick={handleConfirmPassword}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div> */}
      </div>
      }
      </div>
    )
  };

export default Signup;