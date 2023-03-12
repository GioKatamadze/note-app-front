import React from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { addNote } from "../../services/noteServices.js";

import { StyledContainer } from "./style.jsx";

const Header = () => {

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("newData")
    navigate("/signin");
  }

  const AddNote = () => {
    navigate("/notes/new");
  }

    return (
        <StyledContainer>
          <h1>My notes</h1>
          <div>
            <button className="newNote" onClick={AddNote} >+ New Note</button>
            <button className="logoutBTN" onClick={logOut}>Log out</button>
          </div>
       </StyledContainer>
    )
}

export default Header