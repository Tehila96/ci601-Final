
import React from "react";

// -- array of items [{ itemID, colour, size, gender, brand, description, image, price, category, stock }]
const ItemsView = (props) => {
  console.log(props.items);
  const elements = props.items.map((it, i) => (
    <li key={i}>
      {it.itemID} , {it.name} , {it.price}
    </li>
  ));

  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
};

export default ItemsView;