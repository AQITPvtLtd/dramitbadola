import About from "@/components/homepage/About";
import Banner from "@/components/homepage/Banner";
import Contact from "@/components/homepage/Contact";
import Faq from "@/components/homepage/Faq";
import Feedback from "@/components/homepage/Feedback";
import Statistics from "@/components/homepage/Statistics";
import Treatments from "@/components/homepage/Treatments";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Treatments />
      <Statistics />
      <Contact />
      <Faq />
      <Feedback />
    </div>
  );
}