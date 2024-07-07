import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    // Handle the registration logic here
    console.log("Registering:", email, password);
    try {
      const res = await axios.post(
        "http://localhost:8000/register/",
        {
          email,
          password,
          username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div class='flex h-screen bg-indigo-700 w-screen'>
      <div class='w-full max-w-xs m-auto bg-indigo-100 rounded p-5'>
        <header>
          <img
            class='w-20 mx-auto mb-5'
            src='https://img.icons8.com/fluent/344/year-of-tiger.png'
          />
        </header>
        <form action='#' onSubmit={handleRegister} class='mb-4'>
          <div>
            <label class='block mb-2 text-indigo-500' for='username'>
              Email
            </label>
            <input
              class='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
              type='text'
              name='username'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label class='block mb-2 text-indigo-500' for='email'>
              Username
            </label>
            <input
              class='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
              type='username'
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
              onSubmit={handleRegister}
              onClick={handleRegister}
            />
          </div>
        </form>
        <footer>
          <a
            class='text-indigo-700 hover:text-pink-700 text-sm float-left'
            href='#'
          >
            Forgot Password?
          </a>
          <a
            class='text-indigo-700 hover:text-pink-700 text-sm float-right'
            href='#'
          >
            Create Account
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Register;
