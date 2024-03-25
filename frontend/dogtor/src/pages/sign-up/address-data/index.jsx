import { Container, Form } from "./styles";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { ButtonText } from "../../../components/button-text";
import { useState } from "react";
import { Link } from "react-router-dom";

export function AddressData() {
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Form>
        <h1>Endereço</h1>

        <Input
          title="CEP"
          type="number"
          placeholder="99999-99"
          labelFor="cepField"
        />
        <Input
          title="Endereço"
          type="text"
          placeholder="Rua xxxx"
          labelFor="addressField"
        />
        <Input
          title="Número"
          type="number"
          placeholder="99"
          labelFor="numberField"
        />
        <Input
          title="Complemento"
          type="text"
          placeholder="Casa"
          labelFor="complementField"
        />

        <Button
          title="Cadastrar"
          onClick={() => onSubmit({ ...data, password })}
        />
      </Form>
      <Link to="/documents-data">
        <ButtonText title="Voltar" />
      </Link>
    </Container>
  );
}
