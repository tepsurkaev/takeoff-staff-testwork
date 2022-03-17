import React from "react";
import { LoginPage } from "../components/LoginPage";
import { ContactsPage } from "../components/ContactsPage";
import { Header } from "../components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
