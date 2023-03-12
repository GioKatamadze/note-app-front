import styled from "styled-components";

export const StyledForm = styled.div`
  margin-top: -100px;
  form {
    h1 {
      color: #000000;
    }
    background-color: #ffffff;
    border-radius: 10px;
    width: 75vw;
    max-width: 400px;
    padding: 24px;
    margin-top: 50px;
  }
  .alert {
    text-align: right;
    color: #fc4747;
    font-weight: 300;
    transform: translate(-10px, -23px);
    font-size: 12px;
  }
  input {
    width: 90%;
    text-align: left;
    background: none;
    border: none;
    color: #000000;
    border-bottom: 1px solid ${({ error }) => (error ? "#FC4747" : "#5A698F")};
    height: 37px;
    font-size: 15px;
    margin-bottom: 28px;
    padding: 0 15px;
    outline: none;
    caret-color: #000000;
    transition: all 0.3s ease;
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: #000000 !important;
    }
    :hover {
      cursor: pointer;
      border-bottom: 1.5px solid #000000;
      &::placeholder {
        color: #000000bc;
        opacity: 0.8;
      }
    }
    &:focus {
      ${({ error }) => (error ? "#FC4747" : "#FFFFFF")};
    }
    &::placeholder {
      color: ${({ error }) => (error ? "#FC4747" : "#5A698F")};
      opacity: 0.8;
    }
    }
    h1 {
      font-size: 32px;
      font-weight: 300;
      letter-spacing: -0.5px;
      text-align: left;
      color: #ffffff;
      margin-bottom: 30px;
    }
    .button {
      width: 100%;
      height: 48px;
      background: #FCB460;
      color: #ffffff;
      border: 0 solid transparent;
      border-radius: 6px;
      font-size: 15px;
      font-weight: 300;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: center;
      transition: all 0.3s ease;
      margin-top: 12px;
      margin-bottom: 24px;
      &:not(:disabled):hover {
        color: #FCB460;
        background: #ffffff;
      }
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
`;

export const Paragraph = styled.span`
  width: 100%;
  color: #090707;
  font-size: 15px;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
  .nostyle {
    margin-left: 5px;
    text-decoration: none;
    color: #ce0000;
  }
`;