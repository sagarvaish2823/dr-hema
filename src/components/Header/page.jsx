import Image from "next/image";
import React, { Fragment } from "react";
import hemaImage from "../../../public/hema.png";

export default function Header() {
  return (
    <Fragment>
      <section className="">
        <div className="flex justify-center items-center mt-4">
          <Image
            src={hemaImage}
            alt="hema image"
            className="rounded-[100%] overflow-hidden shadow-lg"
            width={100}
            height={100}
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <h1 className="text-center">
            Hi, <b>Dr. HEMAPRIYA NATESAN</b> this side,
            <br /> Founder of the Fastest Growing Community <br />
            <b>E-Commerce Growth Lab</b>
          </h1>
        </div>
      </section>
    </Fragment>
  );
}
