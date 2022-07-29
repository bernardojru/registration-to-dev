import { Container, Button, Message } from "./styles";
import { useNavigate, Link } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import { ChangeEvent, useEffect, useState } from "react";
import { SelectOption } from "../../components/SelectOption";

export function StepTwo() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  function handleNextStep() {
    if (state.name !== "") {
      navigate("/step3");
    } else {
      setMessage(true);
    }
  }

  function setLevel(level: number) {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
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
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente.
        </p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🎉"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectOption
          title="Sou Programador"
          description="Já programo há 2 anos ou mais"
          icon="⚡️"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to='/'>Voltar</Link>
        <Button onClick={handleNextStep}>Próximo</Button>
      </Container>
    </Theme>
  );
}
