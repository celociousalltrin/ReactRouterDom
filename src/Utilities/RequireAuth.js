import React from "react";
import { UseUserContext } from "./Context";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { person } = UseUserContext();

  return (
    <div>
        {person.isGuest ? <Navigate to="/signIn" /> : children}
    </div>
  );
};

export default RequireAuth;

