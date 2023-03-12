import React from "react";
import { StyledContainer, Wrapper } from "./style.jsx";
import Header from "../../components/header/Header.jsx";
import NoteComponent from "../../components/noteComponent/noteComponent.jsx";

const AddNote = () => {

    return (
        <StyledContainer>
            <Wrapper>
                <Header />
                <NoteComponent />
            </Wrapper>
       </StyledContainer>
    )
}

export default AddNote