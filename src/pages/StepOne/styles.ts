import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 13px;
    color: #b8b8d4;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #16195c;
    margin: 30px 0;
  }
  label {
    font-size: 13px;

    > input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 10px;
      border: 2px solid #25cd89;
      border-radius: 10px;
      color: #fff;
      outline: 0;
      font-size: 15px;
      background-color: #02044a;
    }
  }
`;

export const Button = styled.button`
  background-color: #25cd89;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 20px 40px;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 30px;
`;

export const Message = styled.div`
  margin-top: 20px;
  background-color: pink;
  color: red;
  border-radius: 10px;
  min-height: 50px;
  width: 200px;
  animation: visible 0.4s;

  @keyframes visible {
    0% {
      transform: translateY(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
