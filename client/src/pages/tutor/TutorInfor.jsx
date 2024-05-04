import React from "react";
import Header from "../../components/tutor/header/Header";
import Footer from "../../components/parents/footer/Footer";
import Infor from "../../components/tutor/infor/Infor";

const TutorInfor = () => {
    return (
      <>
        <Header activeLink="home" />
        <Infor/>
        <Footer />
      </>
    );
  };
  
  export default TutorInfor;