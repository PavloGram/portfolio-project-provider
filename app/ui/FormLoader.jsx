import React from "react";

function FormLoader() {
  return (
    <div className="z-[100] fixed top-0 left-0 w-full h-full bg-black/[0.6] flex justify-center items-center">
      <div className="lds-dual-ring"></div>
    </div>
  );
}

export default FormLoader;
