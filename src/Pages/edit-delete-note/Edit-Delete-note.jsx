import React from "react";
import { StyledContainer, Wrapper } from "./style.jsx";
import ComponentToEdit from "../../components/note-edit/note-edit.jsx";

const EditorDelete = () => {
    return (
        <StyledContainer>
            <Wrapper>
                <ComponentToEdit />
            </Wrapper>
       </StyledContainer>
    )
}

export default EditorDelete