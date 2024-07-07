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
        <Provider store={store}>
          <VotingPage />
        </Provider>
      </div>
    </>
  );
}

export default App;
