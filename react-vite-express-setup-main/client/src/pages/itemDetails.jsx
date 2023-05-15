import React from "react";
import getItemImageUrl from "../helpers/getItemImageUrl";
import { useLocation } from 'react-router-dom'; // useLocation hook to get the item object from the state of previous page

// This page displays the details of the item 
//that was clicked on the previous page
function ItemDetails() {
    const location = useLocation();
    const item = location.state.item;
    return (
        <div>
            <header>
                <h1>{item.itemTitle}</h1>
            </header>

            <ul>
                <li>{item.colour}</li>
                <li>{item.size}</li>
                <li>{item.category}</li>
                <li>{item.state}</li>
                <li>{item.price}</li>
                <li>{item.stock}</li>
                <li>{item.description}</li>
                {
                    <img src={getItemImageUrl(item.image)} alt="item image" />
                }
            </ul>

        </div>
    );
}
export default ItemDetails; 