import { Routes, Route } from "react-router-dom";

import { Landpage } from "../pages/landpage";
import { SignIn } from "../pages/sign-in";
import { SignUp } from "../pages/sign-up";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landpage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
