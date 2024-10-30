import React from "react";
import Container from "../component/layers/Container";
import { Darker_Grotesque, Roboto } from "next/font/google";
import BredCumb from "../component/layers/BredCumb";

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
    <div className="navBg2">
        <Container>
          <BredCumb />
        </Container>
    </div>
  );
};

export default page;
