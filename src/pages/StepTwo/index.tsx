import { Container, Button, Message } from "./styles";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import { ChangeEvent, useEffect, useState } from "react";
import { SelectOption } from "../../components/SelectOption";

export function StepTwo() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [message, setMessage] = useState(false);

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
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
        <p>Passo 2/3 - {state.name}</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <SelectOption
           title="Sou iniciante"
           description="Comecei a programar há menos de 2 anos"
           icon="🎉"
        />
        <SelectOption
           title="Sou Programador"
           description="Já programo há 2 anos ou mais"
           icon="⚡️"
        />

        <Button onClick={handleNextStep}>Próximo</Button>
      </Container>
    </Theme>
  );
}
