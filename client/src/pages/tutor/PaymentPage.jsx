import React from "react";
import Header from "../../components/tutor/header/Header";
import Footer from "../../components/parents/footer/Footer";
import CartSection from "../../components/tutor/payment/CartSection";

const PaymentPageTutor = () => {
  return (
    <>
      <Header activeLink="payment" />
      <CartSection />
      <Footer />
    </>
  );
};

export default PaymentPageTutor;
