import { Button } from "../../../components/button";
import { Form } from "../../../components/form";
import { Link, useOutletContext } from "react-router-dom";

export function WhoAreYou() {
  const { isVet, setIsVet } = useOutletContext();

  function handleIfUserIsVet(value) {
    setIsVet(value);
  }

  return (
    <>
      <Form title="Você é?">
        <Link to="/sign-up/personal-data">
          <Button
            title="Usuário"
            primary
            onClick={() => handleIfUserIsVet(false)}
          />
        </Link>
        <Link to="/sign-up/vet-data">
          <Button
            title="Veterinário"
            secondary={true}
            onClick={() => handleIfUserIsVet(true)}
          />
        </Link>
      </Form>
    </>
  );
}
