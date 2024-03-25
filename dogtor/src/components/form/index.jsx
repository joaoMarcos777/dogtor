import { Container } from "./styles";

export function Form({ title, children, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{title}</h1>
      {children}
    </Container>
  );
}
