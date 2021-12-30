import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
