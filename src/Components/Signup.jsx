import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import * as yup from 'yup'
import yuppassword from 'yup-password'
// import ToastContainer from './ToastContainer';


const Signup = ({baseurl}) => {
  const [data, setData] = useState({
    email: '',
    name: '',
    password: '',
  })
  const [confirmpassword, setConfirmPassword] = useState('')
  const [responseMsg, setResponseMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
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
  
  
  const formik = useFormik(({
    initialValues: data,
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${baseurl}/signup`, values)
        console.log(values);
        setResponseMsg(response.data.message)
        
        successNotify()
      } catch (error) {
        setErrorMsg(error.response.data.message)
       
        errorNotify()
      }
    
    }
  }
)
) 

  const handleConfirmPassword = () => {
    if (formik.values.password !== formik.values.confirmpassword) {
      toast.error("Password doesn't match")
    }
  }
  const successNotify = () => toast.success(responseMsg, {icon: '👏'});
  const errorNotify = () => toast.error(errorMsg)

  // handleConfirmPassword()
    return (
      <div className="row flex-row mr-0">
        <div>
          <Toaster />
        </div>

        {/**Sign Up Page */}
        <div className="container mr-0">
          <div
            id="box"
            className="row ml-48 relative bg-black/50 text-white mt-20 w-[55em] h-[25em]"
          >
            <div
              className={
                show
                  ? "col-4 mt-32 pl-12 translate-x-[32rem]  transition-transform  duration-500"
                  : "col-5 mt-32 pl-32 translate-x-[-2rem]  transition-transform  duration-500"
              }
            >
              {show ? (
                <div className={show && "transition delay-[2000ms]"}>
                  <h4>Have an account?</h4>
                  <p>Login to Your account</p>
                  <button
                    id="button"
                    className="btn w-24 shadow-slate-300 shadow-md mt-8 text-white"
                    onClick={() => {
                      // setShow(!show)
                      setTimeout(() => setShow(!show), 100);
                    }}
                  >
                    Login
                  </button>
                </div>
              ) : (
                <div className={!show && "transition delay-[2000ms]"}>
                  <h4>Don't Have an account?</h4>
                  <p>Sign up here</p>
                  <button
                    id="button"
                    className="btn w-24 shadow-slate-300 shadow-md mt-8 text-white"
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
                  ? "col-5 h-[28.5em] pt-3 pl-6 bg-white top-[-2em] absolute text-black right-24 translate-x-[-24em] transition-transform  duration-500"
                  : "col-5 h-[30em] pt-12 pl-6 bg-white top-[-2em] absolute text-black right-24 translate-x-[2em] transition-transform  duration-500"
              }
            >
              {show ? (
                <>
                  <h4 className="pb-3 fs-4 font-bold">Sign Up</h4>
                  <form
                    className="flex flex-col"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="relative">
                      <label className="" name="email">
                        E-mail:
                      </label>

                      <br />
                      <div className="text-red-500 float-right absolute right-0 top-0 font-bold italic">
                        {formik.errors.email}
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="input h-12 w-[20em]"
                        placeholder="E-mail"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>
                    <div className="relative mt-1">
                      <label className="" name="name">
                        Name:
                      </label>
                      <br />
                      <div className="text-red-500 float-right absolute right-0 top-0 font-bold italic">
                        {formik.errors.name}
                      </div>
                      <input
                        name="name"
                        type="text"
                        className="input h-12 w-[20em]"
                        placeholder="Name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                    </div>
                    <div className="relative mt-1">
                      <label className="" name="password">
                        Password
                      </label>

                      <br />
                      <div className="text-red-500 float-right absolute right-0 top-0 font-bold italic">
                        {formik.errors.password}
                      </div>
                      <input
                        type="text"
                        name="password"
                        className="input h-12 w-[20em]"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                    </div>
                    <div className="mt-1 relative">
                      <label className="" name="confirmpassword">
                        Confirm your Password
                      </label>

                      <br />
                      <div className="text-red-500 float-right absolute right-0 top-0 font-bold italic">
                        {formik.errors.confirmpassword}
                      </div>
                      <input
                        type="text"
                        value={formik.values.confirmpassword}
                        name="confirmpassword"
                        className="input h-12 w-[20em]"
                        placeholder="Re-type your Password"
                        onChange={formik.handleChange}
                       
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-24 mt-4  shadow-sm h-8 bg-black text-white rounded-md relative left-52"
                      onClick={handleConfirmPassword}
                    >
                      Submit
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <form
                    className="flex flex-col"
                    onSubmit={formik.handleSubmit}
                  >
                    <h4 className="pb-12">Login</h4>
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
                      <div className="text-red-500">
                        {formik.errors.password}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-24 mt-6 shadow-sm h-8 bg-black text-white rounded-md"
                      onClick={handleConfirmPassword}
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
    );
};

export default Signup;