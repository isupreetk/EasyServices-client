import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AddQuotePage from "./pages/AddQuotePage/AddQuotePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SupportPage from "./pages/SupportPage/SupportPage";
import ServiceSchedulingPage from "./pages/ServiceSchedulingPage/ServiceSchedulingPage";
import ServiceBookedPage from "./pages/ServiceBookedPage/ServiceBookedPage";
import ServiceProviderFeed from "./pages/ServiceProviderFeedPage/ServiceProviderFeed";

function App() {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <Header username={user} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage setUserLogin={setUser} />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/services/:id" element={<ServiceSchedulingPage />} />
        <Route path="/bookings" element={<ServiceBookedPage />} />
        <Route path="/addQuote/:id" element={<AddQuotePage />} />
        <Route path="/feed" element={<ServiceProviderFeed />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
