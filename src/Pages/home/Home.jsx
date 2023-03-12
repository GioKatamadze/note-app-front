import React from "react";

import toast from 'react-hot-toast';

import { StyledContainer, Wrapper } from "./style.jsx";
import Header from "../../components/header/Header.jsx";

const Home = () => {



    return (
        <StyledContainer>
            <Wrapper>
                <Header />
            </Wrapper>
       </StyledContainer>
    )
}

export default Home