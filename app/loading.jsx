import React from "react";

function Loading() {
  return (
    <div className="z-[100] relative top-0 left-0 w-full h-full bg-black/[0.6] flex justify-center items-center">
      <div className="lds-dual-ring"></div>
    </div>
  );
}

export default Loading;
