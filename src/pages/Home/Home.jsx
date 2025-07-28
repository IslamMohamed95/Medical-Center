import ContactUs from "../../components/ContactUs/ContactUs";
import Hero from "../../components/Hero/Hero";
import HowItWork from "../../components/HowItWork/HowItWork";
import Services from "../../components/Services/Services";
import TrustedClients from "../../components/TrustedClients/TrustedClients";
import WhyChoosingUs from "../../components/WhyChoosingUs/WhyChoosingUs";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <Hero />
      <WhyChoosingUs />
      <TrustedClients />
      <HowItWork />
      <Services />
      <ContactUs />
    </main>
  );
}

export default Home;
