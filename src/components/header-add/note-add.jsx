import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { addNote } from "../../services/noteServices.js";
import { Wrapper, StyledHeader, Form  } from "./style.jsx";

const ComponentToAdd = () => {

  const navigate = useNavigate();
  const user = localStorage.getItem("user")
  let finalUser = user.replaceAll('"', '')
  const [values, setValues] = useState({ title: "", content: "", user_id: finalUser });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await addNote(values)

    if (data) {
      setValues({ title: "", content: "", user_id: finalUser })
      toast.success("Note Created Successfully")
      navigate("/");
    } else {
      toast.error("This didn't work.")
    }
  }

  const Cancel = () => {
    setValues({ title: "", content: "", user_id: finalUser })
    navigate("/");
  }

    return (
      <Wrapper>
        <StyledHeader>
          <h1>Add Note</h1>
          <div className="btnWrapper" >
            <button className="newNote" onClick={(e) => handleSubmit(e)}>🗸 Create</button>
            <button className="cancelBTN" onClick={Cancel}>Cancel</button>
          </div>
       </StyledHeader>
       <Form>
                <input
                    id="title"
                    type="name"
                    placeholder="Title"
                    name="title"
                    onChange={(e) =>
                        setValues({ ...values, [e.target.name]: e.target.value })
                      }
                    required/>
                <textarea
                    id="content"
                    type="name"
                    placeholder="Content"
                    name="content"
                    onChange={(e) =>
                        setValues({ ...values, [e.target.name]: e.target.value })
                      }
                    required/>
          </Form>
      </Wrapper>
    )
}

export default ComponentToAdd