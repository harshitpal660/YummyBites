import React, { useEffect, useState } from "react";
import Card from "../Components/Card.js";
import API from "../Utils/index.js";
import homeCss from "../styles/home.module.css";

const Home = () => {
  const [input, setInput] = useState("");
  const [recipies, setRecipies] = useState([]);
  let dishes = JSON.parse(localStorage.getItem("dish"));
  let [dish,setDishes] = useState(dishes);
  // localStorage.removeItem('dish')
  // console.log(dish);
  useEffect(() => {
    if (input === "") {
      return;
    }
    const fetchCard = async () => {
      const response = await fetch(
        API.ROOT_URL +
          "&q=" +
          input +
          "&app_id=" +
          API.APP_ID +
          "&app_key=" +
          API.APP_KEY
      );
      const data = await response.json();
      setRecipies(data.hits);
    };
    fetchCard();
  }, [input]);

  const addTofav = (id,value) => {
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
  const removeFromfav = (id,value) => {
    // console.log("remove");
    delete dish[id];
    setDishes(dish);
    localStorage.setItem("dish", JSON.stringify(dish))
    // console.log(dish);
  };
  return (
    <div>
      <h1 id={homeCss.appName}>Recipe Search</h1>
      <input
        id={homeCss.searchButton}
        type="search"
        placeholder="Search a recipe"
        onChange={(e) => setInput(e.target.value)}
      />
      
      <div id={homeCss.list}>
        {recipies.map((item) => {
          return <Card prop={item.recipe} 
            dish={dish} 
            addTofav={addTofav} 
            removeFromfav={removeFromfav}/>;
        })}
      </div>
      
    </div>
    
  );
};

export default Home;
