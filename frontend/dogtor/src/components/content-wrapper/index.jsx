import { Container } from "./styles";

export function ContentWrapper({ children, image = "", ...rest }) {
  return (
    <Container {...rest}>
      {image ? <img src={image} alt="" /> : <div></div>}
      <div>{children}</div>
    </Container>
  );
}
