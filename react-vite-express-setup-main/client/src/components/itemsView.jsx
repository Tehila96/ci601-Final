
import React from "react";

// -- array of items [{ itemID, colour, size, gender, brand, description, image, price, category, stock }]
const ItemsView = (props) => {
  console.log(props.items);
  const elements = props.items.map((it, i) => (
    <li key={i}>
       {it.color} ,
       {it.size} ,
       {it.category} ,
       {it.state} ,
       {it.price} ,
       {it.description} ,
       {it.stock}
    </li>
  ));

  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
};

export default ItemsView;