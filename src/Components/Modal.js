import React from "react";
import cardCss from "../styles/card.module.css";
import { Nutrition } from "./Nutrition";
export const Modal = (prop) => {
    const item = prop.prop;
    // const label = prop.label;
    let id = item.label.split(' ').join('_');
    id = id.split('"').join('');
    id = id.split("'").join('');
    // const rendered = [];
    // const getIngredients=()=>{
    //     for (let id in item.totalNutrients) {
    //         rendered.push(<h3>{item.totalNutrients[id]}</h3>);
    //     }
    // }
    return (
        <React.Fragment>
        <a
            class={cardCss.badge}
            type="button"
            data-bs-toggle="modal"
            data-bs-target={"#"+id}
            // onClick={getIngredients}
        >
            Extra info
        </a>
        <div
            class="modal fade"
            id={id}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    {item.label}
                </h1>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
                </div>
                <div class="modal-body">
                    <Nutrition
                        prop={item}
                        // nutrients = {rendered}
                    />
                </div>
            </div>
            </div>
        </div>
        </React.Fragment>
    );
};
