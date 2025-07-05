import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login({ setNewUser }) {
  let [visible, setVisible] = React.useState(false);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //handle form here
    const form = event.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      setError("Please fill in both password and email fields.");
      return;
    }
    setError("");
    setEmail(email);
    setPassword(password);

    navigate("/search");
  };

  return (
    <>
      <div className="h-135 w-100 bg-[#1E1E1E] rounded-lg p-8 border-1 border-[#2E2E2E] box-border flex flex-col justify-center items-center">
        <div className="w-full">
          <h1 className="text-[#B5B5B5] text-center text-xl font-bold mb-8">
            Welcome back, login
          </h1>

          <form className="relative w-full" onSubmit={handleSubmit}>
            <div className="relative mb-5 flex items-center">
              <span className="absolute left-4.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#606060"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
              </span>

              {/*  focus:shadow-[0_0_10px_0px_#242424] */}

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 bg-[#242424] border-1 rounded-md border-[#2E2E2E] text-[#B5B5B5] placeholder-[#606060] w-full text-sm pl-12 focus:outline-none focus:border-[#454545]"
              />
            </div>

            <div className="relative mb-4 flex items-center">
              <span className="absolute left-4.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#606060"
                  className="bi bi-lock-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                  />
                </svg>
              </span>

              {/* focus:shadow-[0_0_10px_0px_#242424] */}

              <input
                type={visible ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="p-3 pl-12 bg-[#242424] border-1 rounded-md border-[#2E2E2E] text-[#B5B5B5] placeholder-[#606060] w-full text-sm focus:outline-none focus:border-[#454545]"
              />

              <span className="absolute mt-1 right-4">
                <button
                  type="button"
                  className="hover:cursor-pointer"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#B5B5B5"
                      className="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#B5B5B5"
                      className="bi bi-eye-slash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                    </svg>
                  )}
                </button>
              </span>
            </div>

            <p className="-mt-2 text-xs text-right text-[#A2A2A2] mb-8">
              Forgot Password?
            </p>
            <div className="">
              {error && <div className="text-red-600 -mt-6">{error}</div>}
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-[linear-gradient(90deg,_#1E1E1E,_#303030)] rounded-md border-1 border-[#2E2E2E] text-[#A4A4A4] font-[500] mb-6 hover:cursor-pointer transition-all ease-in-out duration-600 hover:scale-103"
            >
              Log in
            </button>

            <div className="relative mb-6">
              <span className="text-[#A2A2A2] absolute left-[50%] transform -translate-x-[50%] -top-[50%] -translate-y-[50%] bg-[#1E1E1E] px-2 text-xs">
                OR
              </span>
              <hr className="text-[#A2A2A2]" />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-[#1D1D1D] rounded-md border-1 border-[#2E2E2E] text-[#B5B5B5] mb-4 hover:cursor-pointer transition ease-in-out duration-600 hover:scale-103"
            >
              <span className="flex justify-center items-center">
                <img src="/google.svg" className="w-7 mr-2" />
                <p>Log in with Google</p>
              </span>
            </button>
          </form>

          <div className="flex items-center justify-center">
            <p className="text-[#A2A2A2] text-xs text-center">
              Don't have an account?
            </p>
            <button
              onClick={() => {
                setNewUser(true);
              }}
              className="font-bold ml-2 text-xs text-[#A2A2A2] hover:cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
