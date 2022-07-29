import { Container, Icon, Description, Info, Title } from "./styles";

type Props = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void
};

export function SelectOption({ description, icon, title, selected, onClick }: Props) {
  return (
    <Container onClick={onClick} selected={selected}>
      <Icon>{icon}</Icon>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  );
}

// 1:29:00
