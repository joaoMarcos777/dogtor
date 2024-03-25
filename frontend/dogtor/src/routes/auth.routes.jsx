import { Routes, Route, Navigate } from "react-router-dom";
import { Landpage } from "../pages/landpage";
import { SignIn } from "../pages/sign-in";
import { SignUp } from "../pages/sign-up";
import { PersonalData } from "../pages/sign-up/personal-data";
import { DocumentsData } from "../pages/sign-up/documents-data";
import { AddressData } from "../pages/sign-up/address-data";
import { WhoAreYou } from "../pages/sign-up/who-are-you";
import { VetData } from "../pages/sign-up/vet-data";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landpage />} />
      <Route path="/sign-in" element={<SignIn />} />

      <Route path="/sign-up" element={<SignUp />}>
        <Route
          path="/sign-up/"
          element={<Navigate replace to="/sign-up/who-are-you" />}
        />
        <Route path="/sign-up/who-are-you" element={<WhoAreYou />} />
        <Route path="/sign-up/vet-data" element={<VetData />} />
        <Route path="/sign-up/personal-data" element={<PersonalData />} />
        <Route path="/sign-up/documents-data" element={<DocumentsData />} />
        <Route path="/sign-up/address-data" element={<AddressData />} />
      </Route>
    </Routes>
  );
}
