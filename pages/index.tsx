import type { NextPage } from "next";
import CustomCursor from "../components/CustomCursor";
import { Navbar } from "../components/navbar";

const Home: NextPage = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <p className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300">
        <span>Hey, I'm Nader Farhat! Frontend Developer From Brazil</span>
      </p>
    </div>
  );
};

export default Home;
