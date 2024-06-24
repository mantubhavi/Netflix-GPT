import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    const message = checkValidData(
      isSignInForm ? null : nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
      </div>
      <div className="grid place-items-center h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 relative p-12 bg-black text-white rounded-md bg-opacity-80"
        >
          <h3 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h3>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 w-full bg-gray-700 rounded-md"
              ref={nameRef}
            />
          )}

          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 w-full bg-gray-700 rounded-md"
            ref={emailRef}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-700 rounded-md"
            ref={passwordRef}
          />
          <p className="text-red-500">{errorMessage}</p>

          <button
            className="my-2 p-2 w-full bg-red-700 rounded-md"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already registered? Sign in now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
