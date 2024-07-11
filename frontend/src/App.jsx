import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";
import Register from "./pages/Register";
import VotingPage from "./pages/VotingPage";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Stories from "./pages/Stories";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/voting",
    element: <VotingPage />,
  },
  {
    path: "/stories",
    element: <Stories />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
function App() {
  const [count, setCount] = useState(0);
  const [storyweave, setStoryweave] = useState("");

  return (
    <>
      <div className='flex'>
        <Provider store={store}>
          <Header />
          <RouterProvider router={router}></RouterProvider>
        </Provider>
      </div>
    </>
  );
}

export default App;
