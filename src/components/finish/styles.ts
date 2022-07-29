import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  background-color: #02022a5b;

  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Alert = styled.div`
  background-color: #02044a;
  padding: 30px;
  height: 20vh;
  width: auto;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: alertOpen 0.5s;

  @keyframes alertOpen {
    0% {
      transform: translateY(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

export const Message = styled.div`
  font-size: 1.5rem;
`;

export const Navigate = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: #25cd89;
  padding: 10px;
  text-align: center;
  width: 5vw;
  border-radius: 10px;
  margin: 20px;
  cursor: pointer;
`;
