import { useEffect, useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import pets from "../../assets/pets.svg";

import { Header } from "../../components/header";
import { Container, Image } from "./styles";

import { PersonalData } from "./personal-data";
import { DocumentsData } from "./documents-data";
import { AddressData } from "./address-data";

export function SignUp() {
  const [image, setImage] = useState({});

  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
  };

  const handlePrevious = () => {
    // Not implemented in this example
  };

  const handleSubmit = (data) => {
    alert("Submitted");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setImage(pets);
      } else setImage(null);
    };

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Header />

      <Image src={image} alt="" />

      <BrowserRouter>
        <Routes>
          <Route
            path="/personal-data"
            element={<PersonalData onNext={handleNext} />}
          />

          <Route
            path="/documents-data"
            element={
              <DocumentsData
                data={formData}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            }
          />

          <Route
            path="/address-data"
            element={
              <AddressData
                data={formData}
                onPrevious={handlePrevious}
                onSubmit={handleSubmit}
              />
            }
          />

          <Route path="/" element={<PersonalData onNext={handleNext} />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}