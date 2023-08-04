import PropTypes from "prop-types"; // type script and flow packages are other solution
import cardCss from "../styles/card.module.css";
import { Modal } from "../Components/Modal.js";
import fav from "../Images/favorite.png";
import fav2 from "../Images/star.png";
import { useState} from "react";
const Card = (props) => {
  const dishes = props.dish;
  const item = props.prop;
  let key = item.label.split(" ").join("_");
  key = key.split('"').join("");
  key = key.split("'").join("");
  let value = item.uri;
  // console.log(item)
  // console.log(id in dishes)
  // console.log(id);
  let addedornot = (dishes!==null &&  dishes!=={} && dishes!==undefined && key in dishes)?true:false
  const [clicked, setClicked] = useState(addedornot);
  // console.log(dishes)(dishes!==null &&  dishes!=={} && dishes!==undefined && dishes.hasOwnProperty(id))
  // useEffect(()=>{
  //   console.log("rendered");
  // })
  function handleadd(id,value){
    addedornot = !addedornot;
    setClicked(!clicked)
    props.addTofav(id,value)
    
  }
  function handleremove(id,value){
    addedornot = !addedornot;
    setClicked(!clicked)
    props.removeFromfav(id,value)
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
        <div style={{ height: "30px", cursor: "pointer" }}>
          {!addedornot && (
            <img 
              src={fav} 
              style={{ height: "100%" }} 
              onClick={()=>handleadd(key,value)} 
            />
          )}
          {addedornot && (
            <img
              src={fav2}
              style={{ height: "100%" }}
              onClick={()=>handleremove(key,value)}
            />
          )}
        </div>
        <Modal prop={item} label={item.label} />
      </div>
    </div>
  );
};

export default Card;
