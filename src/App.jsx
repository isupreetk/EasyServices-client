import "./App.scss";
import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SupportPage from "./pages/SupportPage/SupportPage";
import ServiceSchedulingPage from "./pages/ServiceSchedulingPage/ServiceSchedulingPage";
import ServiceBookedPage from "./pages/ServiceBookedPage/ServiceBookedPage";

function App() {
  const api_URL = process.env.REACT_APP_API_URL;

  // console.log("api_URL", api_URL);

  useEffect(() => {
    axios
      .get(`${api_URL}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/services" element={ < HomePage /> } />
        <Route path="/services/:id" element={ < ServiceSchedulingPage /> } />
        <Route path="/schedule" element={ <ServiceBookedPage /> } />
        <Route path="/login" element={ < LoginPage /> } />
        <Route path="/support" element={ < SupportPage /> } />
      </Routes>
      {/* <Footer /> */}

    </BrowserRouter>
  );
}

export default App;
