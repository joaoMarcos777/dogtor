import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { ButtonText } from "../../../components/button-text";
import { Link } from "react-router-dom";
import { Form } from "../../../components/form";
import { Line } from "../../../components/line";

export function DocumentsData() {
  return (
    <>
      <Form title="Documentos">
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

        <Line />

        <Link to="/sign-up/personal-data">
          <ButtonText title="Voltar" />
        </Link>
      </Form>
    </>
  );
}
