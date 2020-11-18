import React from "react";
import Footer from "../../components/Footer/Footer";
import classes from "./Reservations.module.css";
import Form from "../../components/Form/Form";
import Navigation from "../../components/Navigation/Navigation";

const Checkout = () => {
  return (
    <main className={classes.checkout_container}>
      <section className={classes.header}>
          <Navigation/>
        <div className={classes.order_text}>
          <h1>Reservations</h1>
          <p>
            If you have any special requirements please feel free to call on the
            phone number bellow. We will be happy to accommodate you.
          </p>
        </div>
      </section>
     <Form/>
      <section className={classes.checkout_secondary}>
      <div className={classes.order_text_secondary}>
          <h1>About Us</h1>
          <p>
            If you have any special requirements please feel free to call on the
            phone number bellow. We will be happy to accommodate you.
          </p>
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default Checkout;
