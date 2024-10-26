import React from "react"
import "../../styles/HomeStyle.css"
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

function Home(){
    return(
    <>
        {/* Navbar */}
        <Header/>
        {/* Home section Hero Banner */}
        <Section1/>
        {/* Home section Abdout */}
        <Section2/>
        {/* Home section Menu */}
        <Section3/>
        {/* Home Section Promotion */}
        <Section4/>
        {/* Home section Shop*/}
        <Section5/>
        {/* Home Blog section */}
        <Section6/>
        {/* Home Section Contact */}
        <Section7/>
        {/* Footer */}
        <Footer/>
    </>
  ) 
}

export default Home