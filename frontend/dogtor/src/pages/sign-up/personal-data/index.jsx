import { Link } from "react-router-dom";
import { Form } from "../../../components/form";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { ButtonText } from "../../../components/button-text";
import { Line } from "../../../components/line";

export function PersonalData() {
  return (
    <>
      <Form title="Dados pessoais">
        <Input
          title="Nome"
          type="text"
          placeholder="Diogo Estevão Ferreira"
          labelFor="nameField"
        />
        <Input
          title="E-mail"
          type="text"
          placeholder="email@email.com"
          labelFor="emailField"
        />
        <Input
          title="Senha"
          type="password"
          placeholder="*******"
          labelFor="passwordField"
        />
        <Input
          title="Confirmar senha"
          type="password"
          placeholder="*******"
          labelFor="confirmPasswordField"
        />

        <Link to="/sign-up/documents-data">
          <Button title="Próximo" />
        </Link>

        <Line />

        <Link to="/sign-in">
          <ButtonText title="Já possuo conta" />
        </Link>
      </Form>
    </>
  );
}
