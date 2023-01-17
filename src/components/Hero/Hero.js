import "./Hero.scss";
import hero from "../../assets/images/hero-section.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaraunt, focused on
            tradinional recipies served with a modern twist.
          </p>
          <Link to="/reservation" className="buttonLink">
            Reserve a Table
          </Link>
        </div>

        <div className="imgWrapper">
          <img className="heroImg" src={hero} alt="hero section pic"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
