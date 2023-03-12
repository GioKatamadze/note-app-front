import React from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

import { StyledContainer } from "./style.jsx";

const NoteComponent = () => {

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token")
    navigate("/signin");
  }

    return (
        <StyledContainer>
          <h1>My notes</h1>
          <div>
            <button className="newNote" >+ New Note</button>
            <button className="logoutBTN" onClick={logOut}>Log out</button>
          </div>
       </StyledContainer>
    )
}

export default NoteComponent