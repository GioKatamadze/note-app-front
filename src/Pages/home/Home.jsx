import React from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const Home = () => {

      const navigate = useNavigate();
      const logOut = () => {
        localStorage.removeItem("token")
        navigate("/signin");
      }
    return <h1>Home
        <button onClick={logOut}>Log out</button>
    </h1>
}

export default Home