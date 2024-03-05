"use client"
import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Container2 from "./components/Container2/Container2";
import Container3 from "./components/Container3/Container3";
import Container4 from "./components/Container4/Container4";
import Container5 from "./components/Container5/Container5";
import Container6 from "./components/Container6/Container6";
import Container8 from "./components/Container8/Container8";
import Footer from "./components/Footer/Footer";
import { useWindowSize } from "./utils/windowSize";

export default function Home() {
  const { windowSize, isSmallScreen } = useWindowSize();

  return (
    <main>
      <Hero />
      <Container2 />
      <Container3 mobile={isSmallScreen} />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container8 />
      <Footer />
    </main>
  );
}
