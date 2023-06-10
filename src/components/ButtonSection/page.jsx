import React from "react";
import Button from "@/components/Button/page";
import {
  AiOutlineAudit,
  AiOutlineShoppingCart,
  AiOutlineTags,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaSearchDollar, FaTelegram } from "react-icons/fa";
import { GiBlackBook } from "react-icons/gi";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const ButtonSection = () => {
  return (
    <section className="mx-4 md-768:mx-16 mt-8 md-768:grid grid-cols-2 gap-8">
      <div className="grid grid-rows-4">
        <Button
          name="You can launch your E-commerce business in just 90 days - How? Join Millionaire E-commerce Empire"
          svg={<AiOutlineShoppingCart />}
        />
        <Button
          name="Looking for an Instagram Audit"
          svg={<AiOutlineAudit />}
        />
        <Button
          name="You can get tips to boost your business rigth in your whatsapp indox conviently join Business Broadcast"
          svg={<AiOutlineWhatsApp />}
        />
        <Button
          name="❗❗ Get Important updates in your Telegram ❗❗"
          svg={<FaTelegram />}
        />
      </div>
      <div className="grid grid-rows-4">
        <Button
          name="You can find your winning business ideas in just 5 days"
          svg={<FaSearchDollar />}
        />
        <Button
          name="Free!! Get ₹5,999 guide just for free"
          svg={<AiOutlineTags />}
        />
        <Button
          name="You can get Ultimate guide to grow your E-commerce Business"
          svg={<GiBlackBook />}
        />
        <Button
          name="Every Business Owner should know these 101 powerfull tools of E-commerce Business"
          svg={<MdOutlineTipsAndUpdates />}
        />
      </div>
    </section>
  );
};

export default ButtonSection;
