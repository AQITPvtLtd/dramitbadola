import About from "@/components/homepage/About";
import Banner from "@/components/homepage/Banner";
import Contact from "@/components/homepage/Contact";
import Faq from "@/components/homepage/Faq";
import Feedback from "@/components/homepage/Feedback";
import Statistics from "@/components/homepage/Statistics";
import Treatments from "@/components/homepage/Treatments";

export const metadata = {
  title: "Dr. Amit Badola | Leading Consultant – Medical Oncology in Dehradun",
  description:
    "Meet Dr. Amit Badola, a leading Consultant in Medical Oncology in Dehradun. Explore expert cancer care, personalized treatment plans, and compassionate support from diagnosis to recovery.",
  keywords: [
    "Dr. Amit Badola",
    "Dr. Amit Badola medical oncologist",
    "best oncologist in dehradun",
    "cancer specialist in dehradun",
    "medical oncology expert",
    "chemotherapy doctor dehradun",
    "cancer doctor near me",
    "top cancer specialist dehradun",
    "medical oncology treatment",
    "Dr. Amit Badola cancer care",
    "oncology consultation dehradun",
    "cancer treatment specialist",
    "personalized cancer treatment",
    "dehradunn medical oncologist",
    "cancer care expert dehradun"
  ],
};


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