import { Container } from "./styles";

export function Input({ title, labelFor, ...rest }) {
  return (
    <Container>
      <label htmlFor={labelFor} {...rest}>
        {title}
      </label>

      <input id={labelFor} {...rest} />
    </Container>
  );
}
