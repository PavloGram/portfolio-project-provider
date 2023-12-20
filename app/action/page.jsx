import React from "react";
import Hero from "../components/Hero";
import ActionCom from "../components/ActionCom";


const pageName = "Actions";

export const metadata = {
  title: pageName,
};
function Action() {

  

  return (
    <main>
      <Hero page={pageName} />
     <ActionCom/>
    </main>
  );
}

export default Action;
