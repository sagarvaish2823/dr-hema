import React, { Fragment } from "react";

const Button = ({ name, svg }) => {
  return (
    <Fragment>
      <button
        className="bg-[#ffffff] hover:bg-gray-300 active:scale-110 px-6 py-2 md-768:py-3 rounded-full shadow-md hover:scale-105 duration-150 mt-4 grid grid-cols-[0.2fr,1.8fr] place-items-center gap-4"
        type="button"
      >
        <div className="text-3xl">{svg}</div>
        <div className="md-768:text-sm text-xs font-bold">{name}</div>
      </button>
    </Fragment>
  );
};

export default Button;
