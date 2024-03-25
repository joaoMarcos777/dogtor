import { Form } from "../../../components/form";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { ButtonText } from "../../../components/button-text";
import { Link } from "react-router-dom";
import { Line } from "../../../components/line";

export function AddressData() {
  return (
    <>
      <Form title="Endereço">
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
          title="Cidade"
          type="text"
          placeholder="Belo Horizonte"
          labelFor="cityField"
        />
        <Input
          title="Complemento"
          type="text"
          placeholder="Casa"
          labelFor="complementField"
        />
        <Input
          title="Bairro"
          type="text"
          placeholder="Boa Vista"
          labelFor="districtField"
        />

        <Button
          title="Cadastrar"
          onClick={() => onSubmit({ ...data, password })}
        />

        <Line />
        <Link to="/sign-up/documents-data">
          <ButtonText title="Voltar" />
        </Link>
      </Form>
    </>
  );
}
