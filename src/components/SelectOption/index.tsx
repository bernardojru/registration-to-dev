import { Container, Icon, Description, Info, Title } from "./styles";

type Props = {
  title: string;
  description: string;
  icon: string;
};

export function SelectOption({ description, icon, title }: Props) {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  );
}

// 1:29:00