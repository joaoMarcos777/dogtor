import { useState } from "react";
import { PersonalData } from "../pages/sign-up/personal-data";
import { DocumentsData } from "../pages/sign-up/documents-data";
import { AddressData } from "../pages/sign-up/address-data";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "../pages/sign-up";

export function SignUpRoutes() {
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

  return <></>;
}
