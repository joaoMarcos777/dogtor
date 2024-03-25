import { Container, Form } from "./styles";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { ButtonText } from "../../../components/button-text";
import { Link } from "react-router-dom";
import { useState } from "react";

export function PersonalData({ onNext }) {
  const [name, setName] = useState("");
  return (
    <Container>
      <Form>
        <h1>Dados Pessoais</h1>

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
          <Button title="Próximo" onClick={() => onNext()} />
        </Link>
      </Form>
      <Link to="/sign-in">
        <ButtonText title="Já possuo conta" />
      </Link>
    </Container>
  );
}
