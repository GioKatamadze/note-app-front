import React from "react";
import { StyledContainer, Wrapper } from "./style.jsx";
import ComponentToAdd from "../../components/header-add/note-add.jsx";

const AddNote = () => {

    return (
        <StyledContainer>
            <Wrapper>
                <ComponentToAdd />
            </Wrapper>
       </StyledContainer>
    )
}

export default AddNote