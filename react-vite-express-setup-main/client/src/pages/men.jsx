import React from "react";
import Select from 'react-select';
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ItemsView from "../components/itemsView";
import './pageStyle.css';


function Men() {
    const [arItems, setArItems] = useState();
    const [arItemsFilter, setArItemsFilter] = useState([]);
    const [selectedCatagory, setSelectedCatagory] = useState([]);
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
            const priceMin = minInputRef1.current.value;
            const priceMax = maxInputRef.current.value;
            const filteredItems = arItems.filter((it) => (it.price >= priceMin && it.price <= priceMax) &&
              (it.category === selectedCatagory));
            setArItemsFilter(filteredItems);
          }}>Filter</button>
          <ItemsView items={arItemsFilter} />
        </div>
        <ItemsView items={arItemsFilter} />
      </div>
    )
}
export default Men;