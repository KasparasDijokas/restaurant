import React, { useState } from "react";
import classes from "./Home.Module.css";
import Button from "../../components/Button/Button";
import intro_one_img_desktop from "../../assets/images/homepage/enjoyable-place-mobile@2x.jpg";
import intro_one_img_mobile from "../../assets/images/homepage/enjoyable-place-tablet@2x.jpg";
import intro_two_img_desktop from "../../assets/images/homepage/locally-sourced-mobile@2x.jpg";
import intro_two_img_mobile from "../../assets/images/homepage/locally-sourced-tablet@2x.jpg";
import divideImg from "../../assets/images/patterns/pattern-divide.svg";
import Dish from "../../components/Dish/Dish";
import familyImg from "../../assets/images/homepage/family-gathering-mobile@2x.jpg";
import { data } from "../../data";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [buttonState, setButtonState] = useState({
    meat: true,
    fish: false,
    dessert: false,
  });

  const buttonHandler = (e) => {
    switch (e.target.name) {
      case "meat":
        setButtonState({
          meat: true,
          fish: false,
          dessert: false,
        });
        break;
      case "fish":
        setButtonState({
          meat: false,
          fish: true,
          dessert: false,
        });
        break;
      case "dessert":
        setButtonState({
          meat: false,
          fish: false,
          dessert: true,
        });
        break;
      default:
        throw new Error();
    }
  };

  return (
    <main className={classes.main_container}>
      <header className={classes.header_container}>
        <div className={classes.header_img_container}></div>
        <div className={classes.header_text_container}>
          <h2>dine</h2>
          <h1>Exquisite dining since 1989</h1>
          <p>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <Button class_name="btn_dark">BOOK A TABLE</Button>
        </div>
      </header>

      <section className={classes.intro_container}>
        <div className={classes.intro_one}>
          <div className={classes.intro_one_image}>
            <picture>
              <source
                media="(max-width: 992px)"
                srcset={intro_one_img_mobile}
              />
              <source
                media="(min-width: 992px)"
                srcset={intro_one_img_desktop}
              />
              <img
                className={classes.intro_one_image}
                alt="landscape"
                src={intro_one_img_mobile}
              />
            </picture>
          </div>
          <div className={classes.intro_one_text}>
            <img
              src={divideImg}
              alt="pattern-divide"
              className={classes.intro_one_divider}
            />
            <h2>Enjoyable place for all the family</h2>
            <p>
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
        <div className={classes.intro_two}>
          <div className={classes.intro_two_image}>
          <picture>
              <source
                media="(max-width: 992px)"
                srcset={intro_two_img_mobile}
              />
              <source
                media="(min-width: 992px)"
                srcset={intro_two_img_desktop}
              />
              <img
                className={classes.intro_two_image}
                alt="landscape"
                src={intro_two_img_mobile}
              />
            </picture>
          </div>
          <div className={classes.intro_two_text}>
            <img src={divideImg} alt="pattern-divide" />
            <h2>The most locally sourced food</h2>
            <p>
              All our ingrdients come directly from our farm or local fishery.
              So you can be sure that you're eating the freshest, most
              sustainable food
            </p>
          </div>
        </div>
      </section>

      <section className={classes.secondary_container}>
        <div className={classes.secondary_info}>
          <img src={divideImg} alt="pattern-divide" />
          <h2>A few highlights from our menu</h2>
          <p>
            We cater for all dietary requirements, but here's a glimpse at some
            of our diner's favourites. Our menu is revamped every season.
          </p>
          <Button class_name="btn_dark">ORDER NOW</Button>
        </div>

        <div className={classes.secondary_dishes}>
          <Dish
            img={data.fish.salmon.img}
            alt={data.fish.salmon.alt}
            heading={data.fish.salmon.heading}
            text={data.fish.salmon.text}
          />
          <Dish
            img={data.meat.mignon.img}
            alt={data.meat.mignon.alt}
            heading={data.meat.mignon.heading}
            text={data.meat.mignon.text}
          />
          <Dish
            img={data.desserts.mousse.img}
            alt={data.desserts.mousse.alt}
            heading={data.desserts.mousse.heading}
            text={data.desserts.mousse.text}
          />
        </div>
      </section>

      <section className={classes.offers_container}>
        <img src={familyImg} alt="family" />
        <div className={classes.offers_container_info}>
          <div className={classes.offers_container_controls}>
            <button
              className={
                buttonState.meat
                  ? `${classes.offers_button}`
                  : `${classes.offers_button} ${classes.disabled}`
              }
              name="meat"
              onClick={(e) => buttonHandler(e)}
            >
              JUICY MEAT
            </button>
            <button
              className={
                buttonState.fish
                  ? `${classes.offers_button}`
                  : `${classes.offers_button} ${classes.disabled}`
              }
              onClick={buttonHandler}
              name="fish"
            >
              FRESH FISH
            </button>
            <button
              className={
                buttonState.dessert
                  ? `${classes.offers_button}`
                  : `${classes.offers_button} ${classes.disabled}`
              }
              onClick={buttonHandler}
              name="dessert"
            >
              DELICIOUS DESSERTS
            </button>
          </div>

          <div
            className={
              buttonState.meat
                ? `${classes.food_group_container} ${classes.show}`
                : `${classes.food_group_container}`
            }
          >
            <h2>Family Gathering</h2>
            <p>
              We love catering for entire families. So please bring everyone
              along for special meal with your loved ones. We'll provide a
              memorable experience for all.
            </p>
          </div>
          <div
            className={
              buttonState.fish
                ? `${classes.food_group_container} ${classes.show}`
                : `${classes.food_group_container}`
            }
          >
            <h2>2</h2>
            <p>
              We love catering for entire families. So please bring everyone
              along for special meal with your loved ones. We'll provide a
              memorable experience for all.
            </p>
          </div>
          <div
            className={
              buttonState.dessert
                ? `${classes.food_group_container} ${classes.show}`
                : `${classes.food_group_container}`
            }
          >
            <h2>3</h2>
            <p>
              We love catering for entire families. So please bring everyone
              along for special meal with your loved ones. We'll provide a
              memorable experience for all.
            </p>
          </div>
          <Button class_name="btn_light">ORDER NOW</Button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;