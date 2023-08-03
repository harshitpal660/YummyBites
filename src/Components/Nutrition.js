import cardCss from "../styles/card.module.css";
export const Nutrition = (prop) => {
  const item = prop.prop;
  const nutrients = item.totalNutrients;
  const keys = Object.keys(nutrients);
  const dailyNutrients = item.totalDaily;
  const keys2 = Object.keys(dailyNutrients);
//   console.log(dailyNutrients);
  return (
    <div>
      <h1 className={cardCss.heading}>Calories:{item.calories.toFixed(2)}</h1>
      <h1 className={cardCss.heading}>Ingredients</h1>
      {item.ingredientLines.map((ingredient) => {
        return <div>{ingredient}</div>;
      })}
      <h1 className={cardCss.heading}>Nutritions</h1>

      <div>
        {keys.map((k) => {
          return <div>{nutrients[k].label+": "+nutrients[k].quantity+" "+nutrients[k].unit}</div>;
        })}
      </div>

      <h1 className={cardCss.heading}>Daily Requirements</h1>
      <div>
        {keys2.map((k) => {
            let dailyValue = dailyNutrients[k].quantity;
            let expected = 100;
            if(dailyValue>100){
                expected = 10000/dailyValue;
                dailyValue = 100
            }
            const strDaily = dailyValue.toString()+'%';
            const strexpected = expected.toString()+'%';
            // console.log("daily",dailyValue);
            // console.log("expected",expected)
          return <div style={{width:'100%',marginTop:'20px'}}>
            <div style={{fontSize:'20px'}}>{dailyNutrients[k].label}</div>
            <div style={{backgroundColor:"red",height:"20px",width:strDaily,marginTop:'5px'}}>from dish</div>
            <div style={{backgroundColor:"grey",height:"20px",width:strexpected,marginTop:'5px'}}>expected daily</div>
                
        </div>;
        })}
      </div>
    </div>
  );
};
