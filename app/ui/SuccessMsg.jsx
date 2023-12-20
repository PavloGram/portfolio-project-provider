import React from "react";

function SuccessMsg({ isActive }) {
  return (
    <div className="z-[100] fixed top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
      <p
        className={` ${
          isActive ? "opacity-100 " : "opacity-0 "
        }  p-4 inline-block bg-green-700 rounded-3xl text-white transition-opacity `}
      >
        Надсилання вдале!
      </p>
    </div>
  );
}

export default SuccessMsg;
