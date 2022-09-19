import "./Testimonial.css";
import Star from "../../Images/star.svg";
import less from "../../Images/less.svg";
import greater from "../../Images/greater.svg";
import carousal from "../../Images/carousal_img.jpg";

const Testimonial = () => {

  return (
    <>
      <section className="testimonial">
        <h3 className="test_h3">Testimonials</h3>
        <h4 className="test_h4">Our Happy Clients</h4>
        <article className="review ">
          <img
            src={less}
            alt="previous arrow"
            className="next prev"
          />
          <div className="rating mySlides fade">
            <h3>5.0</h3>
            <div className="stars">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <p className="experience">
              We tried several agencies before we found daCode. Has been a
              pleasure to work with and will soon start the next project with
              our second brand.
            </p>
          </div>
          {/* <div className="rating mySlides fade">
            <h3>4.0</h3>
            <div className="stars">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <p className="experience">
              We tried several agencies before we found daCode. Has been a
              pleasure to work with and will soon start the next project with
              our second brand.
            </p>
          </div>
          <div className="rating mySlides fade">
            <h3>2.0</h3>
            <div className="stars">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <p className="experience">
              We tried several agencies before we found daCode. Has been a
              pleasure to work with and will soon start the next project with
              our second brand.
            </p>
          </div> */}
          {/* <div className="rating mySlides fade">
            <h3>4.0</h3>
            <div className="stars">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <p className="experience">
              We tried several agencies before we found daCode. Has been a
              pleasure to work with and will soon start the next project with
              our second brand.
            </p>
          </div>
          <div className="rating mySlides fade">
            <h3>3.0</h3>
            <div className="stars">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <p className="experience">
              We tried several agencies before we found daCode. Has been a
              pleasure to work with and will soon start the next project with
              our second brand.
            </p>
          </div> */}
          <img
            src={greater}
            alt="next arrow"
            className="next go-next"
          />
        </article>
        <div className="carousel">
          {/* <div className="dot">
            <img src={carousal} alt="" />
          </div>
          <div className="dot">
            <img src={carousal} alt="" />
          </div> */}
          <div className="dot">
            <img src={carousal} alt="" />
            <p className="carousel_para1">Paulus Haverinen</p>
            <p className="carousel_para2">Owner, Ikirakenne Ltd</p>
          </div>
          {/* <div className="dot">
            <img src={carousal} alt="" />
          </div>
          <div className="dot">
            <img src={carousal} alt="" />
          </div> */}
        </div>
        <div className="mobile_next">
          <img src={less} alt="previous arrow" className="mobile_img" />
          <img src={greater} alt="next arrow" className="mobile_img" />
        </div>
      </section>
    </>
  );
};

export default Testimonial;
