import { useEffect, useState } from "react";
import orangeCat from "../../assets/orange-cat.png";
import pets from "../../assets/pets.svg";
import { Container } from "./styles";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Form } from "../../components/form";
import { ContentWrapper } from "../../components/content-wrapper";
import { Link } from "react-router-dom";

export function WhoAreYou() {
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

      <ContentWrapper image={image}>
        <Form title="Você é?">
          <Link to="/sign-in">
            <Button title="Usuário" primary />
          </Link>
          <Link to="/sign-in">
            <Button title="Veterinário" secondary={true} />
          </Link>
        </Form>
      </ContentWrapper>
    </Container>
  );
}
