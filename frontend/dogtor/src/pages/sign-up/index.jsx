import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import pets from "../../assets/pets.svg";
import orangeCat from "../../assets/orange-cat.png";

import { Container, Wrapper } from "./styles";

import { Header } from "../../components/header";
import { ContentWrapper } from "../../components/content-wrapper";

export function SignUp() {
  const [image, setImage] = useState({});

  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
  };

  const handlePrevious = () => {};

  const handleSubmit = (data) => {
    alert("Submitted");
  };

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
        <Outlet
          data={formData}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </ContentWrapper>
    </Container>
  );
}
