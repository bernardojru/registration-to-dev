import { Container, Button, Message } from "./styles";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function StepThree() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [message, setMessage] = useState<boolean>(false);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, []);

  function handleNextStep() {
    if (state.email !== "" && state.github !== "") {
      setFinish(true);
    } else {
      setMessage(true);
    }
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  }

  function handleGithubChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  }

  return (
    <Theme setFinish={finish}>
      <Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

        <hr />

        <label>
          <span>Qual seu email?</span>
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          <span>Qual seu GitHub?</span>
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2">Voltar</Link>
        <Button onClick={handleNextStep}>Finalizar Cadastro</Button>
        {message ? <Message>Insira todos os dados</Message> : null}
      </Container>
    </Theme>
  );
}
