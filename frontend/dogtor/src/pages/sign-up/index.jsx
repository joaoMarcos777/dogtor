import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import pets from "../../assets/pets.svg";
import { Container, Wrapper } from "./styles";

import { Header } from "../../components/header";

export function SignUp() {
  const [image, setImage] = useState({});

  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    console.log("sup bitch");
    setFormData({ ...formData, ...data });
  };

  const handlePrevious = () => {};

  const handleSubmit = (data) => {
    alert("Submitted");
  };

  const handleResize = () => {
    if (window.innerWidth > 1100) {
      setImage(pets);
    } else setImage(null);
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

      <div>
        <img src={image} alt="" />
        <Wrapper>
          <Outlet
            data={formData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </Wrapper>
      </div>
    </Container>
  );
}
