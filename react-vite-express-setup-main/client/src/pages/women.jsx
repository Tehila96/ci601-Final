import React from "react";
import ItemsView from "../components/itemsView";
import './pageStyle.css';


function Women() {

  const gender = "WOMEN";

  return (
    <div>
      <ItemsView gender={gender} />
    </div>
  )
}
export default Women;