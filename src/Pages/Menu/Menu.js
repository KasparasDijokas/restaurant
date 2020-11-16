import React, { useState, useEffect, useRef } from "react";
import classes from "./Menu.module.css";
import { data } from "../../data";
import Dish from "../../components/Dish/Dish";
import divideImg from "../../assets/images/patterns/pattern-divide.svg";
import Button from "../../components/Button/Button";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";

const Menu = () => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [length, setLength] = useState("");
  const [menuData, setmenuData] = useState(data);
  
  useEffect(() => {
    const filtered = category === '' ? data : data.filter((prop) => prop.category === category);
    setmenuData(filtered);
  }, [category]);

  //  useEffect(() => {
  //   let filter = [...menuData]
  //   if (sort === 'lowest') {
  //     filter.sort((a, b) => a.price - b.price )
  //   } else if (sort === 'highest') {
  //     filter.sort((a, b) => b.price - a.price)
  //   } else {
  //     filter = menuData;
  //   } 
  //   setmenuData(filter)
  //  }, [sort]) 

     const sortHandler = (e) => {
       console.log(e.target.value);
       setSort(e.target.value)
    let filter = [...menuData]
    if (e.target.value === 'lowest') {
      filter.sort((a, b) => a.price - b.price )
    } else if (e.target.value === 'highest') {
      filter.sort((a, b) => b.price - a.price)
    } else {
      filter = menuData;
    } 
    setmenuData(filter)
   }

  return (
    <>
      <Filter
        length={length}
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
                      <Button class_name="btn_dark">Add to cart</Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.menu_cart}></div>
      </section>
      <Footer />
    </>
  );
};

export default Menu;

{
  /* <img src={divideImg} alt="pattern-divide" />
          <h2>A few highlights from our menu</h2>
          <p>
            We cater for all dietary requirements, but here's a glimpse at some
            of our diner's favourites. Our menu is revamped every season.
          </p>
          <Button class_name="btn_dark">ORDER NOW</Button> */
}

{
  /* {Object.keys(data).map((group) => {
                return Object.keys(data[group]).map((item, i) => {
                    return (
                      <li
                        className={classes.dish_item}
                        key={data[group][item].alt}
                      >
                        <img
                          src={data[group][item].img}
                          alt={data[group][item].alt}
                        ></img>
                        <div>
                          <h3>{data[group][item].heading}</h3>
                          <p>{data[group][item].text}</p>
                          <div className={classes.price}>
                            <p>{data[group][item].price} $</p>
                            <Button class_name="btn_dark">Add to cart</Button>
                          </div>
                        </div>
                      </li>
                    );
                });
              
            })} */
}

//   {Object.keys(menuData).map((group) => {
//     return Object.keys(menuData[group]).map((item, i) => {
//         return (
//           <li
//             className={classes.dish_item}
//             key={menuData[group][item].alt}
//           >
//             <img
//               src={menuData[group][item].img}
//               alt={menuData[group][item].alt}
//             ></img>
//             <div>
//               <h3>{menuData[group][item].heading}</h3>
//               <p>{menuData[group][item].text}</p>
//               <div className={classes.price}>
//                 <p>{menuData[group][item].price} $</p>
//                 <Button class_name="btn_dark">Add to cart</Button>
//               </div>
//             </div>
//           </li>
//         );
//     });

// })}
