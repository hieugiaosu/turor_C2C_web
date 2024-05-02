import React from "react";
import Header from "../../components/parents/header/Header";
import Footer from "../../components/parents/footer/Footer";
import FilterSection from "../../components/parents/tutor/FilterSection";
import TutorsSection from "../../components/parents/tutor/TutorsSection";
const TutorsPage = () => {
  return (
    <>
      <Header activeLink="tutors" />
      <div className="my-5 list-container d-flex">
        <div className="col-xl-3">
          <FilterSection />
        </div>
        <div className="px-3 scol-xl-9">
          <TutorsSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TutorsPage;
