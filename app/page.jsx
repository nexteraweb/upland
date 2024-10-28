import Link from "next/link";
import Container from "./component/layers/Container";
import {Darker_Grotesque,Roboto} from 'next/font/google'

const darkergrotesque = Darker_Grotesque({
  weight: "",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="bannar py-[256px] bg-[url('../public/bannar.png')] bg-cover bg-center object-cover">
        <Container>
          <div className="left max-w-[567px]">
            <p className={` ${roboto.className} font-medium text-xs leading-[170%] uppercase text-[#FF6231]`}>trendy application</p>
            <h1 className={` ${darkergrotesque.className} text-[#fff] font-extrabold text-[5.00rem] leading-[90%] capitalize`}>work faster with powerful tools</h1>
            <p className={` ${darkergrotesque.className} text-[#fff] font-medium text-[1.75rem] leading-[110%] mt-8 mb-[50px]`}>Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>
          </div>
          <Link
            href="#"
            className={`${roboto.className} bg-red-400 py-4 px-[35px] rounded-[30px] font-medium text-base leading-[170%] capitalize text-[#fff] bannarbtn`}
          >
            Learn more
          </Link>
        </Container>
      </div>
    </>
  );
}
