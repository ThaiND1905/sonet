import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthLayout() {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="auth-container">
            <Outlet />
            <img src="/assets/images/networks.jpg" alt="logo" />
          </section>
        </>
      )}
    </>
  );
}
