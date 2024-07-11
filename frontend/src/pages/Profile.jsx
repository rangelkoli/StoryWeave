import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({}); // [1
  const token = localStorage.getItem("authTokens");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
          options: {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        },
      })
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
        console.log(profile);
      });
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen'>
      <h1 className='text-3xl font-bold'>Profile</h1>

      <div class='max-w-3xl mx-auto my-10 bg-white rounded-lg shadow-md p-5'>
        <img
          class='w-32 h-32 rounded-full mx-auto'
          src='https://picsum.photos/200'
          alt='Profile picture '
        />
        <h2 class='text-center text-2xl font-semibold mt-3 text-black'>
          {profile.username}
        </h2>
        <p class='text-center text-gray-600 mt-1'>{profile.profile}</p>
        <div class='flex justify-center mt-5'>
          <a href='#' class='text-blue-500 hover:text-blue-700 mx-3'>
            Twitter
          </a>
          <a href='#' class='text-blue-500 hover:text-blue-700 mx-3'>
            LinkedIn
          </a>
          <a href='#' class='text-blue-500 hover:text-blue-700 mx-3'>
            GitHub
          </a>
        </div>
        <div class='mt-5'>
          <h3 class='text-xl font-semibold'>Bio</h3>
          <p class='text-gray-600 mt-2'>
            John is a software engineer with over 10 years of experience in
            developing web and mobile applications. He is skilled in JavaScript,
            React, and Node.js.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
