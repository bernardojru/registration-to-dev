import { Link } from "react-router-dom";
import { Container, Description, IconArea, Info, Point, Title } from "./styles";
import ProfileIcon from "../../svgs/profile.svg";
import BookIcon from "../../svgs/book.svg";
import MailIcon from "../../svgs/mail.svg";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

export function SidebarItem({ description, icon, path, title, active }: Props) {
  return (
    <Container>
      <Link to={path}>
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
        <IconArea active={active}>
          {icon === "profile" && (
            <img src={ProfileIcon} alt="" width={24} height={24} />
          )}
          {icon === "book" && (
            <img src={BookIcon} alt="" width={24} height={24} />
          )}
          {icon === "mail" && (
            <img src={MailIcon} alt="" width={24} height={24} />
            
          )}
        </IconArea>
        <Point active={active}></Point>
      </Link>
    </Container>
  );
}
