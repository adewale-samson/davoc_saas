import "./Hero.css";
import hero_img  from "../../hero_img.svg";

import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero_section">
        <div className="hero_div1">
          <hr className="hero_hr" />
          <h1>
            We help you create your <span className="color_change">website</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut
            turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit
            quis leo non. At donec egestas cras in libero pellentesque. Donec
            amet phasellus
          </p>
          <button className="btn1">Get Started</button>
          <button className="btn2">Contact Us</button>
        </div>
        <div className="hero_svg">
          <img src={hero_img} alt="hero section"  />
        </div>
      </section>
    </>
  );
};

export default Hero;
