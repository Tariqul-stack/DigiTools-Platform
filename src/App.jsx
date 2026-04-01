import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/Navbar/NavBar";
import Stats from "./Components/Stats/Stats";
import MainSection from "./Components/MainSection/MainSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Steps from "./Components/Steps/Steps";
import Pricing from "./Components/Pricing/Pricing";
import CTA from "./Components/CTA/CTA";
import Footer from "./Components/Footer/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <NavBar cartCount={cartItems.length}></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <MainSection
        cartItems={cartItems}
        setCartItems={setCartItems}
      ></MainSection>
      <ToastContainer position="top-right" autoClose={2000} />
      <Steps></Steps>
      <Pricing></Pricing>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
}

export default App;
