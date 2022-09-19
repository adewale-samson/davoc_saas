import "./Main.css";
import Hero from "../../Components/Hero/Hero";
import Sticker from "../../Components/Sticker/Sticker";
import Reality from "../../Components/Reality/Reality";
import Work from "../../Components/Work/Work";
import { useState } from "react";
import Testimonial from "../../Components/Testimonial/Testimonial";



const Main = () => {
  const [valueData, setValueData] = useState([
    {
      id: 1,
      head1: "WordPress Site", 
      text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`
    },
    {
      id: 2,
      head1: "WordPress Plugin", 
      text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`
    },
    {
      id: 3,
      head1: "Website Redesign",
      text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`,
    },
    {
      id: 4,
      head1: "WordPress Site Optimization",
      text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`,
    },
    {
      id: 5,
      head1: "Search Engine Optimization", 
      text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`,
    },
    {
      id: 6,
      head1: "Cross Platform Mobile App",
      text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`,
    }
  ])
  return (
    <>
      <Hero />
      <section className="service_section">
        <h2>Our Services</h2>
        <p className="para1">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et.
        </p>
        <article className="sticker_flex">{
          valueData.map(item =>
            <Sticker heading={item.head1} paraText={item.text} key={item.id} />)
        }
        </article>
      </section>
      <Reality />
      <Work />
      <Testimonial />
    </>
  );
};

export default Main;
