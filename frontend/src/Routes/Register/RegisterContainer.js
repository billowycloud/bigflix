import React from "react";
import RegisterPresenter from "./RegisterPresenter";
import AuthTemplate from "../../Components/Auth/AuthTemplate";

const RegisterContainer = () => {
  return (
    <AuthTemplate>
      <RegisterPresenter />
    </AuthTemplate>
  );
};

export default RegisterContainer;
