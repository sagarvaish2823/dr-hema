import ButtonSection from "@/components/ButtonSection/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import React, { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <ButtonSection />
      <Footer />
    </Fragment>
  );
}
