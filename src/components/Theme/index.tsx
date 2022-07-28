import { ReactNode } from "react";
import { Header } from "../Header";
import { Container, Area, Page, Sidebar, Steps } from "./styles";

type Props = {
  children: ReactNode;
};

export function Theme({ children }: Props) {
  return (
    <Container>
      <Area>
        <Header />
        <Steps>
          <Sidebar></Sidebar>
          <Page>{children}</Page>
        </Steps>
      </Area>
    </Container>
  );
}
