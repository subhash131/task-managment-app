import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Auth0button = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            loginWithRedirect();
          }}
          className="p-4 font-semibold text-xl border rounded px-20"
        >
          Login
        </button>
      )}
    </>
  );
};

export default Auth0button;
