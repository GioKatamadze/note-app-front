import React, { useEffect, useState } from "react";
import { StyledContainer, NoteDiv, NoteDivWrapper } from "./style.jsx";
import { getNotes } from "../../services/noteServices";
import { useNavigate } from "react-router-dom";

const NoteComponent = () => {

  const navigate = useNavigate()
  const [data, setData] = useState([])
  const Allnotes = data.map((note) => {

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
            {Allnotes}
          </NoteDivWrapper>
       </StyledContainer>
    )
}

export default NoteComponent