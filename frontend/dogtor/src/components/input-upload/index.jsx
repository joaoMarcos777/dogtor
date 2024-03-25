import { PiUploadSimple } from "react-icons/pi";
import { Container } from "./styles";

export function InputUpload({ title, icon: Icon, labelFor, ...rest }) {
  return (
    <Container>
      <label htmlFor={labelFor} {...rest}>
        <PiUploadSimple size={24} />
        <input id={labelFor} {...rest} />
      </label>
    </Container>
  );
}
