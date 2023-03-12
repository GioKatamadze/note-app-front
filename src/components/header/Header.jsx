import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledContainer } from "./style.jsx";

const Header = () => {

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
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