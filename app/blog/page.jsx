import React from "react";
import Container from "../component/layers/Container";
import { Darker_Grotesque, Roboto } from "next/font/google";
import BreadCumb from "../component/layers/BreadCumb";

const darkergrotesque = Darker_Grotesque({
  weight: "",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className="">
      <section className="bg-blog-intro pt-[159px] pb-[160px]">
        <Container>
          <h1
            className={`${darkergrotesque.className} text-[60px] text-white font-semibold mb-[30px]`}
          >
            Blog
          </h1>
          <BreadCumb />
        </Container>
      </section>
    </div>
  );
};

export default page;
