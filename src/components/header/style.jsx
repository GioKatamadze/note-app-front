import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  h1 {
    font-size: 26px;
    color: #1b1b1beb;
    margin: 25px;
    :hover {
      cursor: pointer;
    }
  }

  .logoutBTN {
    margin: 25px;
    height: 35px;
    width: 80px;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: red;
    color: white;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.1) 0px 3px 7px -3px;
    transition: .2s;
    font-weight: bold;
    :hover {
      background-color: #d70505;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      cursor: pointer;
    }
  }

  .newNote {
    margin: 25px 0 auto auto;
    height: 35px;
    width: 150px;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: #fe9b29;
    color: white;
    font-weight: bold;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.1) 0px 3px 7px -3px;
    transition: .2s;
    :hover {
      background-color: #ff8800;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      cursor: pointer;
    }
  }
`;