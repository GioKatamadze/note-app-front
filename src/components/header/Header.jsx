import React from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { addNote } from "../../services/noteServices.js";

import { StyledContainer } from "./style.jsx";

const Header = () => {

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token")
    navigate("/signin");
  }

  const newNote = async () => {
    try {
      const { data } = await addNote(values)
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          const newData = {
            token: data.token,
            name: data.name,
            email: data.email,
            user_id: data.email
          }
          localStorage.setItem("newData", JSON.stringify(newData))
          navigate("/")
          toast('Welcome!', {
            icon: '👏',
          });
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

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

export default Header