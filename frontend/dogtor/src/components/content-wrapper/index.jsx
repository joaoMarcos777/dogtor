import { Container } from "./styles";

export function ContentWrapper({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
