import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import LandingIndex from "./Component/Landing/LandingIndex";
import "./Component/Header/CommanStyle.css";
import "./Component/Header/FontIconStyle.css";
import Footer from "./Component/Footer/Footer";
import ContactUs from "./Component/ContactUs/ContactUs";
import AboutUs from "./Component/AboutUs/AboutUs";
import HomeLoan from "./Component/Loans/HomeLoan";
import PersonalLoan from "./Component/Loans/PersonalLoan";
import BusinessLoan from "./Component/Loans/BusinessLoan";
import CarLoan from "./Component/Loans/CarLoan";
import Loans from "./Component/Loans/Loans";
import Funding from "./Component/Loans/Funding";
import EmiCalculater from "./Component/LoanEmiCalculater/EmiCalculater";
import Insurance from "./Component/Loans/Insurance";
// import Erropage from "./Component/Error/Erropage";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<LandingIndex />} />
        <Route path="/ContactUs" exact element={<ContactUs />} />
        <Route path="/AboutUs" exact element={<AboutUs />} />
        <Route path="/HomeLoan" exact element={<HomeLoan />} />
        <Route path="/PersonalLoan" exact element={<PersonalLoan />} />
        <Route path="/BusinessLoan" exact element={<BusinessLoan />} />
        <Route path="/CarLoan" exact element={<CarLoan />} />
        <Route path="/Insurance" exact element={<Insurance />} />
        <Route path="/Loans" exact element={<Loans />} />
        <Route path="/Funding" exact element={<Funding />} />
        <Route path="/EmiCalculater" exact element={<EmiCalculater />} />
        {/* <Route path="*" element={<Erropage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
