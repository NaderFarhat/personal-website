import type { NextPage } from "next";
import CardProject from "../components/CardProject";
import CustomCursor from "../components/CustomCursor";
import { Navbar } from "../components/navbar";

const Projects: NextPage = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <CardProject
        name="Personal website"
        description="My personal website"
        tags={["NextJs", "Tailwind", "HTML"]}
        image={"/static/personal-website.png"}
        link={"https://github.com/NaderFarhat/personal-website"}
      />
      <CardProject
        name="Credit card"
        description="A credit card component for React."
        tags={["React", "CSS", "HTML"]}
        image={"/static/record1.gif"}
        link={"https://github.com/NaderFarhat/credit-card"}
      />
    </div>
  );
};

export default Projects;
