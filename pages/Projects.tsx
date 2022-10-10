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
      <CardProject
        name="Pic pay clone"
        description="This project is PicPay simple clone."
        tags={["React native", "Styled components"]}
        image={
          "https://camo.githubusercontent.com/35dbbffdf7d920022864391f241200b3704c9933d070c99e4b1054b5eecf87fb/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f61414278554375524b6969675536686f46722f67697068792e676966"
        }
        link={"https://github.com/NaderFarhat/picpayclone"}
      />
    </div>
  );
};

export default Projects;
