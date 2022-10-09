import { ThemeProvider } from "next-themes";
import CustomCursor from "../components/CustomCursor";
import { Navbar } from "../components/navbar";

import "../styles/globals.css";

export default function App({ Component, pageProps }: any) {
  return (
    <ThemeProvider attribute="class">
      <div className=" transition-opacity duration-1000 ease-out opacity-20 hover:opacity-100 bg-transparent h-screen">
        <CustomCursor />
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
