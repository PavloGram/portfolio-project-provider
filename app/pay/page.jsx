import React from "react";
import Hero from "../components/Hero";
import PayCards from "../components/PayCards";

const pageName = "Pay";
export const metadata = {
  title: pageName,
};

function Pay() {
  return (
    <main>
      <Hero page={pageName} />
      <PayCards />
    </main>
  );
}

export default Pay;
