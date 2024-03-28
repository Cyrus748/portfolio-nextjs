import { Suspense } from "react";
import PageBox from "@/components/core/PageBox";
import HomeSection1 from "@/components/home/Section1";
import HomeSection2 from "@/components/home/Section2";
import HomeSection4 from "@/components/home/Section4";
import HomeSection5 from "@/components/home/Section5";
import HomeSection6 from "@/components/home/Section6";

const Home = () => {
  return (
    <PageBox>
      <Suspense>
        <HomeSection1 id="about" />
        <HomeSection2 id="services" />
        <HomeSection4 id="skills" />
        <HomeSection5 id="projects" />
        <HomeSection6 id="contact" />
      </Suspense>
    </PageBox>
  );
};

export default Home;
