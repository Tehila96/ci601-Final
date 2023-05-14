import {React, useEffect, useState, useRef} from "react";
import Select from 'react-select';
import axios from "axios";
import { Buffer } from "buffer";

// -- array of items [{ itemID, colour, size, gender, brand, description, image, price, category, stock }]
const ItemsView = (props) => {

  const [arItems, setArItems] = useState();
  const [arItemsFilter, setArItemsFilter] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState(["Any"]);
  const minInputRef1 = useRef();
  const maxInputRef = useRef();

  const baseUrl = "/api/v1/items/";


  const getUrl = (image) =>
  {
    if (image != null && image?.data?.length !== 0)
    {
      const base64String = Buffer.from(image).toString('base64');
      return base64String;
    }
    return "";
  }

  const getData = () =>  {
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
            setArItemsFilter(filteredItems);
            mapItems(filteredItems);
          }}>Filter</button>
        </div>
      </div>

      

      {arItemsFilter.map((it, i) => (
      <li key={i}>
        {it.colour} ,
        {it.size} ,
        {it.category} ,
        {it.state} ,
        {
          it.image != null && it.image?.data?.length !== 0 &&
           <img src={`data:image/png;base64,${getUrl(it.image)}`} alt=""/>
        }
        {it.price} ,
        {it.description} ,
        {it.stock}
      </li>))
    }
    </>
  );
  }

export default ItemsView;