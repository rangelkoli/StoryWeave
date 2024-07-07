import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";
import Register from "./pages/Register";

function App() {
  const [count, setCount] = useState(0);
  const [storyweave, setStoryweave] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/storyweave").then((res) => {
      setStoryweave(res.data.message);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <div className='flex'>
        <Register />
      </div>
    </>
  );
}

export default App;
