import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <Link to="/">Dogtor</Link>
    </Container>
  );
}
