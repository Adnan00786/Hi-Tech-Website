import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brand";
// import Divider from "@/components/Divider";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <About/>
      <Brands/>
      {/* <Divider/> */}
      <Products/>
    </>
  );
}
