import { Container } from "./styles";

export function Button({ title, primary = true, secondary = false, ...rest }) {
  return (
    <Container $primary={primary} $secondary={secondary} {...rest}>
      {title}
    </Container>
  );
}
