import { Container, Alert, Message, Navigate } from "./styles";

export function Finish() {
  return (
    <Container>
      <Alert>
        <Message>Os seu dados foram salvos</Message>
        <Navigate to="/">Ok</Navigate>
      </Alert>
    </Container>
  );
}
