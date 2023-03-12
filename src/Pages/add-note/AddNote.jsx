import React from "react";
import { StyledContainer, Wrapper } from "./style.jsx";
import ComponentToAdd from "../../components/header-add/HeaderToAdd.jsx";

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