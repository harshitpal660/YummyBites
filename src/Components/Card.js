import PropTypes from "prop-types"; // type script and flow packages are other solution
import cardCss from "../styles/card.module.css";
import { Modal } from "../Components/Modal.js";
import fav from '../Images/favorite.png';
import fav2 from '../Images/star.png';
import { useState } from "react";
const Card = (props) => {
  const [clicked,setClicked] =  useState(false);
  // console.log(props.prop);
  const item = props.prop;
  let id = item.label.split(' ').join('_');
  id = id.split('"').join('');
  id = id.split("'").join('');
  let dishes = JSON.parse(localStorage.getItem("dish"));
  console.log(dishes)
  const handleToggle=()=>{
    
    if(!clicked){
      if (dishes === null) {
        dishes = {};
        dishes[id] = id;
        console.log(dishes);
        localStorage.setItem("dish", JSON.stringify(dishes));
        setClicked(!clicked);
        return;
      }
      // dishes = JSON.parse(dishes);
      dishes[id] = id;
      localStorage.setItem("dish", JSON.stringify(dishes));
      // localStorage.setItem('dish',id);
      console.log(dishes);
      setClicked(!clicked);
      return;
    }
    delete dishes.id;
    localStorage.setItem("dish", JSON.stringify(dishes))
    setClicked(!clicked);
  }
  return (
    <div className={cardCss.card}>
      <div>
        <img className={cardCss.img} src={item.image} alt={item.label} />
      </div>
      <a href={item.url} target="_blank">
        <h2>{item.label}</h2>
      </a>
      <div className={cardCss.info}>
        <a href={item.url} target="_blank" className={cardCss.badge}>
          Recepie
        </a>
        <div style={{height:'30px',cursor:'pointer'}} onClick={handleToggle}>
          {!clicked && <img src={fav} style={{height:'100%'}}/>}
          {clicked && <img src={fav2} style={{height:'100%'}}/>}
        </div>
        <Modal prop={item} label={item.label} />
      </div>
    </div>
  );
};

export default Card;
