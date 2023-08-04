import { useState, useEffect } from "react";
import API from "../Utils/index.js";
import Card from "../Components/Card.js";
import homeCss from "../styles/home.module.css";

const Favourite = () => {
  const data = JSON.parse(localStorage.getItem("dish"));
  //   console.log(data)
  let value = Object.values(data);
//   let value = null;
//   if (data == null || data == undefined) {
//     value = [];
//   } else {
//     value = Object.values(data);
//   }

  let [dish, setDishes] = useState(value);
  const [cards, setCards] = useState([]);
  //   console.log(data);

  //   console.log(API.ROOT_URL2 + uri);
  useEffect(() => {
    // console.log(value[0]);
    const fetchCard = async () => {
      for (let i = 0; i < value.length; i++) {
        let uri =
          "&uri=" +
          value[i] +
          "&app_id=" +
          API.APP_ID +
          "&app_key=" +
          API.APP_KEY;
        uri = uri.replace(":", "%3A");
        uri = uri.replace("/", "%2F");
        uri = uri.replace("#", "%23");
        const response = await fetch(API.ROOT_URL2 + uri);

        const data = await response.json();
        // console.log(data.hits);
        setCards(data.hits);
      }
    };
    fetchCard(value);
  }, [...value]);

  const addTofav = (id, value) => {
    console.log("add");
    if (dish === null) {
      dish = {};
      dish[id] = value;
      setDishes(dish);
      console.log(dish);
      localStorage.setItem("dish", JSON.stringify(dish));
      return;
    }
    dish[id] = value;
    setDishes(dish);
    console.log(dish);
    localStorage.setItem("dish", JSON.stringify(dish));
    console.log(dish);
  };
  const removeFromfav = (id, value) => {
    console.log("remove");
    delete dish[id];
    setDishes(dish);
    localStorage.setItem("dish", JSON.stringify(dish));
    console.log(dish);
  };
  return (
    <div id={homeCss.list}>
        {cards.map((item) => (
          <Card prop={item.recipe} 
            dish={dish} 
            addTofav={addTofav} 
            removeFromfav={removeFromfav}/>
        ))}
      </div>
  );
};

export default Favourite;
