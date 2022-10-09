import { ThemeProvider } from "next-themes";
import CustomCursor from "../components/CustomCursor";
import { Navbar } from "../components/navbar";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <CustomCursor />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
