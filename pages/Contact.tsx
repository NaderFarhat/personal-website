import type { NextPage } from "next";
import CardContact from "../components/CardContact";
import CustomCursor from "../components/CustomCursor";
import { Navbar } from "../components/navbar";

const Contact: NextPage = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <header className="flex justify-between items-center p-8">
        <CardContact
          name="linkedin"
          link="https://www.linkedin.com/in/naderf/"
          image="/static/linkedin.png"
        />
        <CardContact
          name="github"
          link="https://github.com/NaderFarhat"
          image="/static/github.png"
        />
        <CardContact
          name="email"
          link="mailto:nader2308@gmail.com"
          image="/static/gmail.png"
        />
      </header>
    </div>
  );
};

export default Contact;
