import Link from "next/link";
import React, { Fragment } from "react";
import { SiApple, SiSpotify, SiAmazon } from "react-icons/si";
import { SlControlEnd, SlControlPlay, SlControlStart } from "react-icons/sl";
import {
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <Fragment>
      <section className="mx-4 md-768:mx-16 my-8 md-768:grid grid-cols-2 gap-8">
        <Link
          href={"/"}
          className="grid grid-cols-[0.5fr,1.5fr] place-items-center border-4 rounded-2xl bg-black py-8 border-white"
        >
          <div className="text-3xl flex gap-2 flex-col text-white">
            <SiApple />
            <SiSpotify />
            <SiAmazon />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="text-3xl flex gap-2 text-white">
              <SlControlStart />
              <div className="mx-8 text-white">
                <SlControlPlay />
              </div>
              <SlControlEnd />
            </div>
            <h2 className="text-xl font-bold text-white">LISTEN MY PODCAST</h2>
          </div>
        </Link>
        <div className="grid grid-rows-3 place-items-center border-4 rounded-2xl bg-black py-8 border-white">
          <div className="flex justify-center items-center gap-4">
            <h2 className="text-white">Find me on</h2>
            <AiFillInstagram className="text-white text-3xl" />
            <AiFillYoutube className="text-white text-4xl" />
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <AiOutlineWhatsApp className="text-white text-3xl" />
            <h2 className="text-white">Join Whatsapp Community</h2>
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <BsFacebook className="text-white text-3xl" />
            <h2 className="text-white">Secure Your Seat in FB VIP Group</h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
