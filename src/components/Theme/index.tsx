import { Container, Area, Page, Sidebar, Steps } from "./styles";
import { ReactNode } from "react";
import { Finish } from "../finish";
import { Header } from "../Header";
import { SidebarItem } from "../SidebarItem";
import { useForm } from "../../contexts/FormContext";

type Props = {
  children: ReactNode;
  setFinish?: boolean;
};

export function Theme({ children, setFinish }: Props) {
  const { state } = useForm();
  return (
    <Container>
      {setFinish && <Finish />}
      <Area>
        <Header />
        <Steps>
          <Sidebar>
            <SidebarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />
            <SidebarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />
            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />
          </Sidebar>
          <Page>{children}</Page>
        </Steps>
      </Area>
    </Container>
  );
}
