import "./Services.css";
import Business from "../../Components/Business/Business";
import Sticker from "../../Components/Sticker/Sticker";
import { useState } from "react";
import Work from '../../Components/Work/Work'
import Presence from "../../Components/Presence/Presence";

const Services = () => {
  const [valueData, setValueData] = useState([
    {
      id: 1,
      head1: "WordPress Site",
      text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`,
    },
    {
      id: 2,
      head1: "WordPress Plugin",
      text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`,
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
    },
  ]);
  return (
    <>
      <Business />
      <article className="sticker_flex">
        {valueData.map((item) => (
          <Sticker heading={item.head1} paraText={item.text} key={item.id} />
        ))}
      </article>
      <Work />
      <Presence />

    </>
  );
};

export default Services;
