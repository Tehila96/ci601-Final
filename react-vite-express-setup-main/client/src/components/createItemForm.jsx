import { useState, useRef, } from "react";

import UploadWidget from './uploadWidget';
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // useNavigate hook to redirect to another page
import './style.css';

// 
function CreateItemForm() {

    const navigate = useNavigate();
    const [url, setUrl] = useState();
    const [error, updateError] = useState();

    const colour = useRef();
    const size = useRef();
    const gender = useRef();
    const brand = useRef();
    const state = useRef();
    const description = useRef();
    const itemTitle = useRef();
    const price = useRef();
    const category = useRef();
    const stock = useRef();

    // function to create array of user errors messages  
    function InputValidation() {
        let message = [];
        if (!(itemTitle.current.value.trim()))
            message.push("No item title");
        if (!(description.current.value.trim()))
            message.push("No description");
        if (!(colour.current.value.trim()))
            message.push("No colour");
        if (!(size.current.value.trim()))
            message.push("No size");
        if (!(brand.current.value.trim()))
            message.push("No brand");
        if (!(price.current.value.trim()))
            message.push("No price");
        if (!(url.trim()))
            message.push("No Image");

        // convert array of strings to string and replace commas with commas and new line
        message = message.flat().toString().replaceAll(",", ",\n"); 
        return message;
    }

    // function to handle form submission
    function handleOnUpload(error, result, widget) {
        if (error) {
            updateError(error);
            widget.close({
                quiet: true
            });
            return;
        }

            const urlToFetch = result.info.secure_url;
            setUrl(urlToFetch);   
    }

    // function to handle post request
    function postRequest() {
         // call function to validate user input
        const validationResult = InputValidation();
        // if there is an error, alert user and return
        if (validationResult) {
            alert("Please fill the next fields: \n" + validationResult);
            return;
        }
        var itemDetails;
        let form_data = new FormData();
        let imageBlob;
        fetch(url)
            .then(res => res.blob())
            .then(blob => {
                // The user didnt upload any photo (image variable will get the 
                //value of the image in the location "client/images/no-image.jpg" later)
                // For now we'll initialize variable value to an empty Blob.
                imageBlob = blob;
                if (!url)
                    imageBlob = new Blob([], { type: "image/png" });
                itemDetails = { 
                    colour: colour.current.value, 
                    size: size.current.value,
                    gender: gender.current.value,
                    brand: brand.current.value,
                    state: state.current.value,
                    iteamTitle: itemTitle.current.value,
                    description: description.current.value,
                    image: imageBlob,
                    price: price.current.value,
                    category: category.current.value,
                    stock: stock.current.value 
                }
            })
            .then(() => {
                for (var key in itemDetails) {
                    form_data.append(key, itemDetails[key]);
                }
            })
            .then(() => {
                axios.post("/api/v1/closet", form_data, { headers: { "Content-Type": "multipart/form-data" } })
                    .then((response) => {
                        console.log(response);
                        const newItem = response.data;
                        alert("Item added successfully");
                        navigate(newItem.itemTitle, { state: { item: newItem } }); // redirect to item page)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
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
                        <span className="form_wrapper">
                            <h2> New Item </h2>
                            <label htmlFor="">Item Title</label>
                            <input ref={itemTitle} type="text" />
                            <label htmlFor="">Description</label>
                            <input ref={description} type="text" />
                            <label htmlFor="">Category</label>
                            <select ref={category}>
                                <option value="Tops">Tops</option>
                                <option value="Bottoms">Bottoms</option>
                                <option value="Shoes">Shoes</option>
                                <option value="Accessories">Accessories</option>
                            </select>
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
                            <label htmlFor="">Price</label>
                            <input ref={price} type="number" />
                            <label htmlFor="">Stock</label>
                            <select ref={stock}>
                                <option value="Available">Available</option>
                                <option value="Sold">Sold</option>
                            </select>
                            <button onClick={handleOnClick}>
                                Upload Photo
                            </button>
                            <button onClick={postRequest}>
                                Upload
                            </button>
                            <img src={url}></img>
                        </span>)
                }}
            </UploadWidget>
        </>
    );
}
export default CreateItemForm;

