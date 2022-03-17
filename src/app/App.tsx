import React from "react";
import { LoginPage } from "../components/LoginPage";
import { ContactsPage } from "../components/ContactsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactsPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
