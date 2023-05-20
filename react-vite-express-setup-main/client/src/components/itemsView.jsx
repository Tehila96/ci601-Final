import { React, useEffect, useState, useRef } from "react";
import Select from 'react-select';
import axios from "axios";
import ItemCard from "./itemCard";
import '../pages/pageStyle.css'

// -- array of items [{ itemID, colour, size, gender, brand, description, image, price, category, stock }]
const ItemsView = (props) => {

  const [arItems, setArItems] = useState();
  const [arItemsFilter, setArItemsFilter] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState(["Any"]);
  const [selectedState, setSelectedState] = useState(["Any"]);
  const colour = useRef("");
  const minInputRef = useRef();
  const maxInputRef = useRef();

  const baseUrl = "/api/v1/items/";


  const getData = () => {
    axios
      .get(baseUrl, { params: { gender: props.gender } })
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
    <>
      <div className="wrapper">
        <div>
          <h1 className="center_header_floating">SHOP {props.gender}</h1>
        </div>
        <div className="product_grid">

          {arItemsFilter.length &&
            arItemsFilter.map((it, i) => (
              <span key={i}>
                <div className="product_item">
                  <ItemCard item={it}></ItemCard>
                </div>
              </span>))
          }
          {!arItemsFilter.length &&
            <h1>No items found for your search</h1>
          }
        </div>
        <div className="side_bar">
          <div className="filter">
            <h2 className="center_header">Filter</h2>
            <div className="all_filters">
              <div className="select_filters">
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
                <p>State</p>
                <Select
                  defaultValue={selectedState}
                  options={[
                    { value: "Any", label: "Any" },
                    { value: "new", label: "new" },
                    { value: "used-like new", label: "used-like new" },
                    { value: "used-good", label: "used-good" },
                    { value: "used-fair", label: "used-fair" },
                  ]}
                  onChange={(e) => {
                    setSelectedState(e.value);
                  }}
                />
              </div>
              <div className="input_filters">
                <p>Price</p>
                <label htmlFor="">Min</label>
                <input ref={minInputRef} type="number" />
                <label htmlFor="">Max</label>
                <input ref={maxInputRef} type="number" />
                <label htmlFor="">Colour</label>
                <input ref={colour} type="text" />
              </div>
            </div>
            <button className="filter_button" onClick={() => {
              // Added some input validations
              // Could also add alerts and reject requests for invalid input

              const priceMin = parseFloat(minInputRef.current.value);
              const priceMax = parseFloat(maxInputRef.current.value);
              const chosenColour = String(colour.current.value).toLowerCase();
              let filteredItems = arItems;
              if (priceMin || priceMax) {
                if (priceMin)
                  filteredItems = filteredItems.filter((it) => it.price >= priceMin)
                if (priceMax)
                  filteredItems = filteredItems.filter((it) => it.price <= priceMax)
              }
              if (selectedCatagory != "Any")
                filteredItems = filteredItems.filter((it) => it.category === selectedCatagory);
              if (selectedState != "Any")
                filteredItems = filteredItems.filter((it) => it.state === selectedState);
              if (chosenColour.trim())
                filteredItems = filteredItems.filter((it) => String(it.colour).toLowerCase() === chosenColour);
              setArItemsFilter(filteredItems);
            }}>Filter</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemsView;