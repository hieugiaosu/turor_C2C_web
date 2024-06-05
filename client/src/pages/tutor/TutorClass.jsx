import React, { useState } from "react";
import Header from "../../components/tutor/header/Header";
import Footer from "../../components/parents/footer/Footer";
import FilterSection from "../../components/tutor/tutor/FilterSection";
import TutorsSection from "../../components/tutor/tutor/TutorsSection";

const TutorClass = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleClassSelect = (classItem) => {
    setSelectedClass(classItem);
  };

  return (
    <>
      <Header activeLink="courses" />
      <div className="my-5 list-container d-flex">
        {!selectedClass && (
          <div className="col-xl-3">
            <FilterSection />
          </div>
        )}
        <div className={`px-3 ${selectedClass ? 'col-xl-12' : 'col-xl-8'}`}>
          <TutorsSection onClassSelect={handleClassSelect} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TutorClass;
