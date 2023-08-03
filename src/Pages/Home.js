import React, { useEffect, useState } from "react";
import Card from "../Components/Card.js";
import API from "../Utils/index.js";
import homeCss from "../styles/home.module.css";

const Home = () => {
  const [input, setInput] = useState("");
  const [recipies, setRecipies] = useState([]);
  // recepies in favourites
  // localStorage.removeItem('dish');
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
      console.log(data.hits);
      setRecipies(data.hits);
    };
    fetchCard();
  }, [input]);
  return (
    <div>
      <h1 id={homeCss.appName}>Recipe Search</h1>
      <input
        id={homeCss.searchButton}
        type="search"
        placeholder="Search a recipe"
        onChange={(e) => setInput(e.target.value)}
      />

      {/* <button onClick={apicall} id="searchButton">
        Search
      </button> */}
      
      
      <div id={homeCss.list}>
        {recipies.map((item) => {
          return <Card prop={item.recipe}/>;
        })}
      </div>
    </div>
  );
};

export default Home;
