import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Card from "../components/Card";
import Modal from "../components/Modal";
import routerIcon from "../../public/icon2.png";

const pageName = "Internet";
export const metadata = {
  title: pageName,
};
function Internet() {
  return (
    <main>
      <Hero page={pageName} />
      <Card srcImg={routerIcon} />
      <Contact />
      <Modal />
    </main>
  );
}

export default Internet;
