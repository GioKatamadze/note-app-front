import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from 'react-hot-toast';
import { editNote, getSingleNote, deleteNote } from "../../services/noteServices.js";
import { Wrapper, StyledHeader, Form  } from "./style.jsx";

const ComponentToEdit = () => {

  const navigate = useNavigate();
  const id = useParams()
  const noteID = id.id
  const [values, setValues] = useState({ title: "", content: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newTitle = values.title
    const newContent = values.content
    const dataToEdit = { title: newTitle, content: newContent }

    const data = await editNote(noteID, dataToEdit)
    if (data) {
      console.log(data)
      setValues({ title: "", content: "" })
      toast.success("Note Edited")
      navigate("/home");
    } else {
      toast.error("This didn't work.")
    }
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    const { data } = await deleteNote(noteID)
    if (data) {
      toast.success("Note Deleted")
      navigate("/home");
    } else {
      toast.error("This didn't work.")
    }
  }

  const Cancel = () => {
    setValues({ title: "", content: "" })
    navigate("/home");
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const noteData = await getSingleNote(noteID)
        const newTitle = noteData.data.title
        const newContent = noteData.data.content
        setValues({ title: newTitle, content: newContent });
      } catch (eror) {
        if (eror.response.status === 404) {
          console.log("error while fetching");
        }
      }
    };
    fetch();
  }, [navigate]);

    return (
      <Wrapper>
        <StyledHeader>
          <h1>Edit Note</h1>
          <div className="btnWrapper" >
            <button className="backBTN" onClick={Cancel}>Back</button>
            <button className="newNote" onClick={(e) => handleSubmit(e)}>Save</button>
            <button className="cancelBTN" onClick={(e) => handleDelete(e)}>Delete</button>
          </div>
       </StyledHeader>
       <Form>
                <input
                    id="title"
                    type="name"
                    placeholder="Title"
                    name="title"
                    value={values.title}
                    onChange={(e) =>
                        setValues({ ...values, [e.target.name]: e.target.value })
                      }
                    required/>
                <textarea
                    id="content"
                    type="name"
                    placeholder="Content"
                    name="content"
                    value={values.content}
                    onChange={(e) =>
                        setValues({ ...values, [e.target.name]: e.target.value })
                      }
                    required/>
          </Form>
      </Wrapper>
    )
}

export default ComponentToEdit