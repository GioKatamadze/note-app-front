import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E9E9F3;
`;

export const Wrapper = styled.div`
  width: 93vw;
  height: 96vh;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.114) 0px 7px 29px 0px;
  background-color: #FBFAFF;
  overflow-y: scroll;

  @media only screen and (min-width: 600px) {
    width: 80vw;
    height: 80vh;
  }
`;