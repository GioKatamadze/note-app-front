import styled from "styled-components";

export const Input = styled.button`
  width: 100%;
  height: 48px;
  background: #f29f41;
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
  box-shadow: rgba(243, 170, 52, 0.505) 0px 13px 27px -5px, rgba(243, 170, 52, 0.516) 0px 8px 16px -8px;
  &:not(:disabled):hover {
    background: #ea8613;
    color: #ffffff;
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;