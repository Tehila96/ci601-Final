import React from "react";
import { useRef, useState } from "react";
import ItemsView from "../components/itemsView";
import './pageStyle.css';


// function Women() {
//     const minInputRef1 = useRef();
//     const maxInputRef = useRef();
//     const [arItemsFilter, setArItemsFilter] = useState([]);
  
//     const arItems = [
//         {items}
//     ];
  
  
//     return (
//       <>
//         <label htmlFor="">priceMin</label>
//         <input ref={minInputRef1} type="number" />
//         <br />
//         <label htmlFor="">priceMax</label>
//         <input ref={maxInputRef} type="number" />
//         <br />
//         <button
//           onClick={() => {
//             const priceMin = minInputRef1.current.value;
//             const priceMax = maxInputRef.current.value;
//             const filteredItems = arItems.filter((it) => it.price >= priceMin && it.price <= priceMax);
//             setArItemsFilter(filteredItems);
//           }}
//         >
//           Filter
//         </button>
//         <ItemsView items={arItemsFilter} />
//       </>
//     );
//   }
  
//   export default Women;


function Women() {
    return (
        <section className="menu_grid">
            <div className="box a">Tops</div>
            <div className="box b">Bottoms</div>
            <div className="box c">Shoes</div>
            <div className="box d">Accessories</div>
        </section>
    );
}
export default Women;
