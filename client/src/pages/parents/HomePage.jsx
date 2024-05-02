import React from "react";
import Header from "../../components/parents/header/Header";
import HeroSection from "../../components/parents/home/HeroSection";
import CategorySection from "../../components/parents/home/CategorySection";
import CourseSection from "../../components/parents/home/CourseSection";
import EntrySection from "../../components/parents/home/EntrySection";
import Footer from "../../components/parents/footer/Footer";
import TutorSection from "../../components/parents/home/TutorSection";

const HomePage = () => {
  return (
    <>
      <Header activeLink="home" />
      <HeroSection />
      <CategorySection />
      <CourseSection />
      <EntrySection />
      <TutorSection />
      <Footer />
    </>
  );
};

export default HomePage;
