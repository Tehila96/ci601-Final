import React from "react";
import ItemsView from "../components/itemsView";
import './pageStyle.css';


function Men() {
  
  const gender = "MEN";

  return (
    <div>
      <ItemsView gender={gender} />
    </div>   
  )
}
export default Men;