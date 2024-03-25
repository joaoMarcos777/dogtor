import { Link } from "react-router-dom";
import { Form } from "../../../components/form";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { ButtonText } from "../../../components/button-text";
import { Line } from "../../../components/line";
import { PiUploadSimple } from "react-icons/pi";
import { InputUpload } from "../../../components/input-upload";

export function VetData() {
  return (
    <>
      <Form title="Dados profissionais">
        <Input
          title="CRMV"
          type="number"
          placeholder="12345"
          labelFor="crmvField"
        />
        <InputUpload type="file" labelFor="uploadField" icon={PiUploadSimple} />

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
