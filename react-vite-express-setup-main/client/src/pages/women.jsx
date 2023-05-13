import React from "react";
import Select from 'react-select';
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ItemsView from "../components/itemsView";
import './pageStyle.css';


function Women() {
  const [arItems, setArItems] = useState();
  const [arItemsFilter, setArItemsFilter] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState(["Any"]);
  const minInputRef1 = useRef();
  const maxInputRef = useRef();

  const url = "/api/v1/items/women";

   function getData() {
    axios
      .get(url)
      .then((res) => {
        setArItems(res.data);
        setArItemsFilter(res.data); // Added in order to show items on first render.
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(getData, []);

  return (
    <div className="wrapper">
      <div className="filter">
        <h2>Filter</h2>
        <p>Price</p>
        <label htmlFor="">Min</label>
        <input ref={minInputRef1} type="number" />
        <label htmlFor="">Max</label>
        <input ref={maxInputRef} type="number" />
        <label htmlFor=""></label>
        <p>Category</p>
        <Select
          options={[
            { value: "Any", label: "Any" },
            { value: "Tops", label: "Tops" },
            { value: "Bottoms", label: "Bottoms" },
            { value: "Shoes", label: "Shoes" },
            { value: "Accessories", label: "Accessories" },
          ]}
          onChange={(e) => {
            setSelectedCatagory(e.value);
          }}
        />

        <button onClick={() => {
          // Added some input validations
          // Could also add alerts and reject requests for invalid input

          const priceMin = minInputRef1.current.value;
          const priceMax = maxInputRef.current.value;
          let filteredItems = arItems;
          if (priceMin.trim() || priceMax.trim()) {
            if (priceMin && !priceMax)
              filteredItems = arItems.filter((it) => it.price >= priceMin)
            else if (priceMax && !priceMin)
              filteredItems = arItems.filter((it) => it.price <= priceMax)
            else
              filteredItems = arItems.filter((it) => it.price <= priceMax && it.price >= priceMin)
          }
          if (selectedCatagory != "Any")
            filteredItems = filteredItems.filter((it) => it.category === selectedCatagory);
            console.log(filteredItems);
          setArItemsFilter(filteredItems);
        }}>Filter</button>
      </div>
      <ItemsView items={arItemsFilter} />
    </div>
  )
}
export default Women;