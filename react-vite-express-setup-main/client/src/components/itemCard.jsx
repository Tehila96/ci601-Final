import getItemImageUrl from "../helpers/getItemImageUrl";
import { useNavigate } from "react-router-dom";

const ItemCard = (props) => {

    const item = props.item;
    const navigate = useNavigate();

    function navigateToProductInfo(item) {
        navigate(item.itemTitle, { state: { item: item } });
    }

    return (
        <>

            <div className="card">
                <div className="card-img-wrapper">
                    {
                        <img src={getItemImageUrl(item.image)} alt="item image" />
                    }
                </div>
                <div className="card-inner">
                    <div className="header">
                        <h2>{item.itemTitle}</h2>
                        <h5>{item.description}</h5>
                    </div>
                    <div className="content">
                        <h4>Price: {item.price} £</h4>
                    </div>
                    <button onClick={() => navigateToProductInfo(item)}>more info</button>
                </div>
            </div>
        </>
    );
}
export default ItemCard;