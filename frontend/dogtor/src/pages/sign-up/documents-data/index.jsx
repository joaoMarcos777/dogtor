import { Container, Form } from "./styles";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { ButtonText } from "../../../components/button-text";
import { Link } from "react-router-dom";
import { useState } from "react";

export function DocumentsData() {
  const [cpf, setCpf] = useState("");

  return (
    <Container>
      <Form>
        <h1>Documentos</h1>

        <Input
          title="CPF"
          type="number"
          placeholder="023.023.023-02"
          labelFor="cpfField"
        />
        <Input
          title="Data de nascimento"
          type="text"
          placeholder="23/03/2003"
          labelFor="dateField"
        />
        <Input
          title="Telefone"
          type="number"
          placeholder="(31) 9 9999-9999"
          labelFor="phoneField"
        />

        <Link to="/sign-up/address-data">
          <Button title="Próximo" />
        </Link>
      </Form>
      <Link to="/sign-up/personal-data">
        <ButtonText title="Voltar" />
      </Link>
    </Container>
  );
}
