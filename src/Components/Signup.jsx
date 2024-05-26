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
const [show, setShow] = useState(false);
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
    if (formik.values.password !== confirmpassword) {
      alert("Password doesn't match")
    }
  }
  const successNotify = () => toast.success(responseMsg, {icon: '👏'});
  const errorNotify = () => toast.error(errorMsg)
  const handleShow = () => {
    
  }
  // handleConfirmPassword()
    return (
      <div className="row flex-row mr-0">
        <div>
          <Toaster />
        </div>

        {/**Sign Up Page */}
        <div className={show ? "container col-6" : "hidden"}>
          <div>
            <h4>Have an account?</h4>
            <p>Login to Your account</p>
            <button onClick={() => setShow(!show)}>Login</button>
          </div>
          <h4>Sign Up</h4>
          <form className="flex flex-col" onSubmit={formik.handleSubmit}>
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
              <label className="" name="name">
                Name:
              </label>
              <br />
              <input
                name="name"
                type="text"
                className="input h-12 w-[20em]"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <div className="text-red-500">{formik.errors.name}</div>
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
            <div>
              <label className="" name="confirmPassword">
                Confirm your Password
              </label>

              <br />
              <input
                type="password"
                value={confirmpassword}
                name="confirmPassword"
                className="input h-12 w-[20em]"
                placeholder="Re-type your Password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
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
        {/*Login Page */}
        <div className={show ? "hidden" : "container col-6"}>
          <div>
            <h4>Don't Have an account?</h4>
            <p>Sign up her</p>
            <button onClick={() => setShow(!show)}>Sign Up</button>
          </div>
          <h4>Login</h4>
          <form className="flex flex-col" onSubmit={formik.handleSubmit}>
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
    );
};

export default Signup;