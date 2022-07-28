import { Container, Button, Message } from "./styles";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import { ChangeEvent, useEffect, useState } from "react";

export function StepOne() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [message, setMessage] = useState(false);

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  function handleNextStep() {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      setMessage(true);
    }
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  }
  return (
    <Theme>
      <Container>
        <p>Passo 1/3 - {state.name}</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          <span>Seu nome completo</span>
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <Button onClick={handleNextStep}>Próximo</Button>
        {message ? <Message>Preencha os dados</Message> : null}
      </Container>
    </Theme>
  );
}
