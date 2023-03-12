import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 5%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background-color: #FBFAFF;

  h1 {
    font-size: 22px;
    color: #1b1b1beb;
    margin: 15px 0 15px 20px;
    :hover {
      cursor: pointer;
    }
  }

  .btnWrapper {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .backBTN {
    margin: 5px 10px auto auto;
    height: 30px;
    width: 50px;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: #dea52a;
    color: white;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.1) 0px 3px 7px -3px;
    transition: .2s;
    font-weight: bold;
    :hover {
      background-color: #ca9524;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      cursor: pointer;
    }
  }

  .cancelBTN {
    margin: 5px 20px auto 10px;
    height: 30px;
    width: 50px;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: #d70505;
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
    margin: 5px 0 auto auto;
    height: 30px;
    width: 50px;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: #268018;
    color: white;
    font-weight: bold;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.1) 0px 3px 7px -3px;
    transition: .2s;
    :hover {
      background-color: #2b9b1a;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 600px) {
    h1 {
      font-size: 26px;
      margin: 25px;
    }
    .cancelBTN {
      margin: 5px 25px auto auto;
      height: 35px;
      width: 80px;
    }
    .newNote, .backBTN {
      margin: 5px 20px auto auto;
      height: 35px;
      width: 80px;
    }
}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  #title, #content {
      width: 100%;
      margin: auto 20px;
      border: none;
      outline: none;
      border-radius: 10px;
      background-color: #e7f8ff;
      padding: 20px;
    }
  #title {
    font-weight: bold;
    height: 5%;
    font-family: Arial, Helvetica, sans-serif;
    ::placeholder{
      font-weight: lighter;
    }
  }
  #content {
    height: 75%;
    font-weight: lighter;
    margin-top: 15px;
    resize: none;
    font-family: Arial, Helvetica, sans-serif;
    ::placeholder{
      font-weight: lighter;
    }
  }

  @media only screen and (min-width: 600px) {
    #title, #content {
      margin: auto 25px;
    }
    #content {
      margin-top: 20px;
    }
  }
`;