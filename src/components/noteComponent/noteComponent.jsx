import React, { useEffect, useState } from "react";
import { StyledContainer, NoteDiv, NoteDivWrapper } from "./style.jsx";
import { getNotes } from "../../services/noteServices";
import { useNavigate } from "react-router-dom";

const NoteComponent = () => {

  const navigate = useNavigate()
  const [data, setData] = useState([])
  const user = localStorage.getItem("user")
  let finalUser = user.replaceAll('"', '')
  const myNotes = data.filter(note => {
    return note.user_id === finalUser;
  });

  const Notes = myNotes.map((note) => {
    return (
        <NoteDiv 
        key={note.id}
        onClick={() => {navigate(`/notes/${note.id}`)}}
        >
          <h2>{note.title}</h2>
            <div className="content" >
                <p>{note.content}</p>
            </div>
        </NoteDiv>  
    )
})

useEffect(() => {
  const fetch = async () => {
    try {
      const notes = await getNotes()
      setData(notes.data);
    } catch (eror) {
      if (eror.response.status === 404) {
        console.log("error while fetching");
      }
    }
  };
  fetch();
}, [navigate]);

    return (
        <StyledContainer>
          <NoteDivWrapper>
            {Notes}
          </NoteDivWrapper>
       </StyledContainer>
    )
}

export default NoteComponent