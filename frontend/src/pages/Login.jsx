import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Logging:", email, password);

    const user = {
      username,
      password,
    };
    dispatch(login(user));

    setEmail("");
    setPassword("");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, errorMessage } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div class='flex h-screen bg-indigo-700 w-screen'>
      <div class='w-full max-w-xs m-auto bg-indigo-100 rounded p-5'>
        <header>
          <img
            class='w-20 mx-auto mb-5'
            src='https://img.icons8.com/fluent/344/year-of-tiger.png'
          />
        </header>
        {isLoading ? (
          <Loader text={"Logging in..."} />
        ) : (
          <form action='#' onSubmit={handleLogin} class='mb-4'>
            <div>
              <label class='block mb-2 text-indigo-500' for='username'>
                Username
              </label>
              <input
                class='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
                type='text'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label class='block mb-2 text-indigo-500' for='password'>
                Password
              </label>
              <input
                class='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                class='w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded'
                type='submit'
                value='Login'
                onSubmit={handleLogin}
                onClick={handleLogin}
              />
            </div>
          </form>
        )}
        <footer>
          {/* <a
                        class='text-indigo-700 hover:text-pink-700 text-sm float-left'
                        href='#'
                    >
                        Forgot Password?
                    </a> */}
          <Link
            to='/register'
            class='text-indigo-700 hover:text-pink-700 text-sm float-right'
          >
            Register
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Login;
