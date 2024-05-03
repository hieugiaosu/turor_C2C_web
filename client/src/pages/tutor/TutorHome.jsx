import React from "react";
import Header from "../../components/tutor/header/Header";
import HeroSection from "../../components/tutor/home/HeroSection";
import CategorySection from "../../components/tutor/home/CategorySection";
import EntrySection from "../../components/tutor/home/EntrySection";
import Footer from "../../components/parents/footer/Footer";
import TutorSection from "../../components/tutor/home/TutorSection";

const TutorHome = () => {
  return (
    <>
      <Header activeLink="home" />
      <HeroSection />
      <CategorySection />
      
      <EntrySection />
      <Footer />
    </>
  );
};

export default TutorHome;
