import React from "react";
import { useState, useRef } from 'react';
import UploadWidget from '../components/uploadWidget';
import axios from "axios";

const uploadForm = () => {
  const [url, updateUrl] = useState();
  const [error, updateError] = useState();

  const colour = useRef();
  const size = useRef();
  const gender = useRef();
  const brand = useRef();
  const state = useRef();
  const description = useRef();
  const price = useRef();
  const category = useRef();
  const stock = useRef();

  function handleOnUpload(error, result, widget) {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true
      });
      return;
    }
    updateUrl(result?.info?.secure_url);
    console.log(result.info);
  }
  function postRequest() {
    const itemDetails = { colour: colour.current.value, size: size.current.value, gender: gender.current.value, brand: brand.current.value, state: state.current.value, description: description.current.value, image: url, price: price.current.value, category: category.current.value, stock: stock.current.value }
    const headers = {
      'Authorization': 'Bearer my-token',
    };
    axios
      .post("http://localhost:5000/closet", itemDetails, headers, {
        // Add parameters here
      })
      .then((response) => {
        console.log(response.data);
        // Handle data
      })
      .catch((error) => {
        console.log(error);
      })
  }

    return (
        <>
            <UploadWidget onUpload={handleOnUpload}>
                {({ open }) => {
                 function handleOnClick(e) {
                e.preventDefault();
                open();
                }   
                return (     
            <span>
              <label htmlFor="">Colour</label>
              <input ref={colour} type="text" />
              <label htmlFor="">Size</label>
              <input ref={size} type="text" />
              <label htmlFor="">Gender</label>
              <select ref={gender}>
                <option value="MEN">MEN</option>
                <option value="WOMEN">WOMEN</option>
              </select>
              <label htmlFor="">Brand</label>
              <input ref={brand} type="text" />
              <label htmlFor="">State</label>
              <select ref={state}>
                <option value="new">new</option>
                <option value="used-like new">used-like new</option>
                <option value="used-good">used-good</option>
                <option value="used-fair">used-fair</option>
              </select>
              <label htmlFor="">Description</label>
              <input ref={description} type="text" />
              <label htmlFor="">Price</label>
              <input ref={price} type="number" />
              <label htmlFor="">Category</label>
              <select ref={category}>
                <option value="Tops">Tops</option>
                <option value="Bottoms">Bottoms</option>
                <option value="Shoes">Shoes</option>
                <option value="Accessories">Accessories</option>
              </select>
              <label htmlFor="">Stock</label>
              <select ref={stock}>
                <option value="Sold">Sold</option>
                <option value="Available">Available</option>
              </select>
              <button onClick={handleOnClick}>
                Upload an Image
              </button>
              <button onClick={postRequest}>
                Post Request
              </button>
            </span> 
          ) 
       }}  
      </UploadWidget>
      <img src={url}></img>
            </>
    );
    }

export default uploadForm;  