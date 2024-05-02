import React from "react";
import Header from "../../components/parents/header/Header";
import Footer from "../../components/parents/footer/Footer";
import CartSection from "../../components/parents/payment/CartSection";
const PaymentPage = () => {
  return (
    <>
      <Header activeLink="payment" />
      <CartSection />
      <Footer />
    </>
  );
};

export default PaymentPage;
