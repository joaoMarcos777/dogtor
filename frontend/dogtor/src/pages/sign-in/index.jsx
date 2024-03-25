import { useEffect, useState } from "react";
import orangeCat from "../../assets/orange-cat.png";
import pets from "../../assets/pets.svg";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/button-text";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Container, Image, Form } from "./styles";
import { Link } from "react-router-dom";

export function SignIn() {
  const [image, setImage] = useState({});

  const handleResize = () => {
    if (window.innerWidth > 1100) {
      setImage(pets);
    } else setImage(orangeCat);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Header />

      <Image src={image} alt="" />

      <Form>
        <h1>Login</h1>
        <Input
          title="E-mail"
          placeholder="email@email.com"
          type="email"
          labelFor="emailField"
        />
        <Input
          title="Senha"
          placeholder="*******"
          type="password"
          labelFor="passwordField"
        />

        <Button title="Entrar" primary />
        <Link to="/sign-up">
          <ButtonText title="Cadastre-se" />
        </Link>
      </Form>
    </Container>
  );
}
