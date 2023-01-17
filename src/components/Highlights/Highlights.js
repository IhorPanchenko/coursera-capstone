import { Link } from "react-router-dom";
import "./Highlights.scss";
import salad from "../../assets/images/greek-salad.jpg";

const Highlights = () => {
  return (
    <section className="container">
      <div className="title">
        <h1>This weeks specials!</h1>
        <Link className="buttonLink">Online Menu</Link>
      </div>

      <div className="highlights">
        <div className="description">
          <div className="imgWrapper">
            <img className="dishImg" src={salad} alt="greek salad pic"></img>
          </div>

          <div className="descWrapper">
            <div className="nameAndPrice">
              <span className="dishName">Greek salad</span>
              <span className="price">$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <a>Order a delivery</a>
          </div>
        </div>

        <div className="description">
          <div className="imgWrapper">
            <img className="dishImg" src={salad} alt="greek salad pic"></img>
          </div>

          <div className="descWrapper">
            <div className="nameAndPrice">
              <span className="dishName">Greek salad</span>
              <span className="price">$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <a>Order a delivery</a>
          </div>
        </div>

        <div className="description">
          <div className="imgWrapper">
            <img className="dishImg" src={salad} alt="greek salad pic"></img>
          </div>

          <div className="descWrapper">
            <div className="nameAndPrice">
              <span className="dishName">Greek salad</span>
              <span className="price">$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <a>Order a delivery</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
