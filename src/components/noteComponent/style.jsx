import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const NoteDivWrapper = styled.div`
  margin: 10px;
  margin-top: 0;
  width: 100%;
  height: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  @media only screen and (min-width: 600px) {
    margin: 15px;
    margin-top: 0;
  }
`

export const NoteDiv = styled.div`
  padding: 20px;
  margin: 10px;
  flex-grow: 1;
  border-radius: 10px;
  background-color: #ffde9d;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  transition: .1s;
  h2, p {
    color: black;
  }
  .content {
    margin-top: 5px;
    line-height: 20px;
  }
  :hover{
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.1) 0px 3px 7px -3px;
  }
`