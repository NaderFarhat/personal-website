import type { NextPage } from "next";
import CardProject from "../components/CardProject";
import CustomCursor from "../components/CustomCursor";
import { Navbar } from "../components/navbar";

const Projects: NextPage = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <CardProject />
      <CardProject />
    </div>
  );
};

export default Projects;
