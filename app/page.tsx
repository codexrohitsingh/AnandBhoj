import Image from "next/image";
import Navbar from "../_components/navbar";
import Hero from "../_components/Hero";
import About from "../_components/About";
import Contact from "../_components/contact";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      {/* <Contact /> */}
    </div>
  );
}
