import type { NextPage } from "next";
import CustomCursor from "../components/CustomCursor";
import { Navbar } from "../components/navbar";

const Home: NextPage = () => {
  return (
    <div className="max-w-screen-md mx-auto h-4/5 flex justify-start items-center">
      <section className="w-full md:w-9/12 xl:w-8/12">
        <span className="font-bold uppercase tracking-widest">Hey, I`m</span>
        <h1 className="text-3xl lg:text-5xl font-bold text-red-600">
          Nader
          <br />
          Farhat
        </h1>
        <p className="mb-1">A front end developer.</p>
      </section>
    </div>
  );
};

export default Home;
