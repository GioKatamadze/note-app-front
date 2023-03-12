import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  position: sticky;
  top: 0;
  background-color: #FBFAFF;

  h1 {
    font-size: 22px;
    color: #1b1b1beb;
    margin: 15px 0 15px 20px;
    :hover {
      cursor: pointer;
    }
  }

  .logoutBTN {
    margin: 15px 20px 15px 10px;
    height: 30px;
    width: 70px;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: #b00000;
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
    margin: 15px 0 auto auto;
    height: 30px;
    width: 90px;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: #268018;
    color: white;
    font-weight: bold;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.1) 0px 3px 7px -3px;
    transition: .2s;
    :hover {
      background-color: #279716;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 600px) {
    h1 {
      font-size: 26px;
      margin: 25px;
    }
    .logoutBTN {
      margin: 5px 25px auto auto;
      height: 35px;
      width: 80px;
    }
    .newNote {
      margin: 5px 20px auto auto;
      height: 35px;
      width: 150px;
    }
}
`;