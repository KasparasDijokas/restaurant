import React, { useState, useEffect } from "react";
import classes from "./Menu.module.css";
import { data } from "../../data";
import Dish from "../../components/Dish/Dish";
import divideImg from "../../assets/images/patterns/pattern-divide.svg";
import Button from "../../components/Button/Button";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Cart from "../../components/Cart/Cart";
import Navigation from "../../components/Navigation/Navigation";

const Menu = () => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [menuData, setmenuData] = useState(data);
  const storage = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(storage ? storage : []);
  const [modal, setModal] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    address: "",
    date: "",
    time: "",
    order: cart,
  });

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.count;
  }, 0);

  useEffect(() => {
    const filtered =
      category === ""
        ? data
        : data.filter((prop) => prop.category === category);
    setmenuData(filtered);
  }, [category]);

  const sortHandler = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
    let filter = [...menuData];
    if (e.target.value === "lowest") {
      filter.sort((a, b) => a.price - b.price);
    } else if (e.target.value === "highest") {
      filter.sort((a, b) => b.price - a.price);
    } else {
      filter = menuData;
    }
    setmenuData(filter);
  };

  const cartHandler = (id) => {
    const updatedCart = [...cart];
    let alreadyInCart = false;
    updatedCart.forEach((item) => {
      if (item.id === id) {
        alreadyInCart = true;
        item.count++;
      }
    });
    if (!alreadyInCart) {
      updatedCart.push(menuData.find((item) => item.id === id));
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);
  };

  const removeDishHandler = (id) => {
    const updatedCart = [...cart];
    const index = updatedCart.find((el) => el.id === id);
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const modalHandler = () => {
    setModal(false);
  };

  const userInputHandler = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    console.log(userInput);
  };

  return (
    <>
      <main className={classes.menu_wrapper}>
        <Navigation />
        <Filter
          category={category}
          sort={sort}
          setCategory={setCategory}
          setSort={setSort}
          length={menuData.length}
          sortHandler={sortHandler}
        />
        <section className={classes.menu_container}>
          <div className={classes.menu_items}>
            <ul className={classes.menu_dishes}>
              {menuData.map((dish) => {
                return (
                  <li className={classes.dish_item} key={dish.alt}>
                    <img src={dish.img} alt={dish.alt}></img>
                    <div>
                      <h3>{dish.heading}</h3>
                      <p>{dish.text}</p>
                      <div className={classes.price}>
                        <p>{dish.price} $</p>
                        <Button
                          class_name="btn_dark"
                          onClick={() => cartHandler(dish.id)}
                        >
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={classes.menu_cart}>
            <Cart
              cartData={cart}
              removeDishHandler={removeDishHandler}
              modal={modal}
              setModal={setModal}
            />
          </div>
        </section>
        <Footer />
        <div
          className={modal ? `${classes.modal_show}` : `${classes.modal_hide}`}
          onClick={modalHandler}
        ></div>
        <form
          className={
            modal ? `${classes.menu_form}` : `${classes.menu_form_hide}`
          }
        >
          <li>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              onChange={userInputHandler}
            ></input>
          </li>
          <li>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={userInputHandler}
            ></input>
          </li>
          <li>
            <input
              type="text"
              placeholder="Address"
              name="address"
              required
              onChange={userInputHandler}
            ></input>
          </li>
          <li className={classes.date}>
            <label>Pick a delivery date</label>
            <input
              type="date"
              placeholder=""
              name="date"
              onChange={userInputHandler}
            ></input>
          </li>
          <li className={classes.date}>
            <label>Pick a delivery time</label>
            <input
              type="time"
              placeholder="Name"
              name="time"
              onChange={userInputHandler}
            ></input>
          </li>

          <Button onClick={submitForm} class_name="btn_light">
            ORDER NOW
          </Button>
          <li className={classes.form_price}>Total: {totalPrice} $</li>
        </form>
      </main>
    </>
  );
};

export default Menu;
