import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ItemsView from "../components/itemsView";
import './pageStyle.css';


function Women() {
  const [arItems, setArItems] = useState();
  const [arItemsFilter, setArItemsFilter] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tops"); // ["Tops", "Bottoms", "Shoes", "Accessories"
  const minInputRef1 = useRef();
  const maxInputRef = useRef();

  const url = "/api/v1/items";

  useEffect(getData, []);

  function getData() {
    axios
      .get(url)
      .then((res) => {
        setArItems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const priceMin = minInputRef1.current.value;
  const priceMax = maxInputRef.current.value;

  return (
    <>
      <div className="box_grid">
        <div className="box">Tops</div>
        <div className="box">Bottoms</div>
        <div className="box">Shoes</div>
        <div className="box">Accessories</div>
      </div>

      <h2>Filter</h2>
      <label htmlFor="">priceMin</label>
      <input ref={minInputRef1} type="number" />
      <br />
      <label htmlFor="">priceMax</label>
      <input ref={maxInputRef} type="number" />
      {/* <br />
        <label htmlFor="">colour</label>
        <input type="checkbox" />
      <br />
        <label htmlFor="">size</label>
        <input type="text" />
      <br />
        <label htmlFor="">category</label>
        <input type="text" />
      <br />
        <label htmlFor="">state</label>
        <input type="text" />
      <br /> */}
      <button
        onClick={() => {
          const filteredItems = arItems.filter((it) => it.price >= priceMin && it.price <= priceMax);
          setArItemsFilter(filteredItems);
        }}
      >Filter By Price
      </button>
      <button onClick={() => {
        const filteredItems = arItems.filter((it) => it.category === selectedCategory);
        setArItemsFilter(filteredItems);
      }}
      >Filter by category</button>
      <button onClick={() => {
        const filteredItems = arItems.filter((it) => (it.price >= priceMin && it.price <= priceMax) && 
                                             (it.category === selectedCategory));
        setArItemsFilter(filteredItems);
      }}>Filter by all</button>
      <ItemsView items={arItemsFilter} />
    </>
  );
}

export default Women;



