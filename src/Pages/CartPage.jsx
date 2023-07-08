import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import BillComponent from "../Components/Cart/BillComponent";

const CartItemsList = ({ title, price, quantity, total }) => (
    <div>

        <p>{title}</p>
        <p>{price}</p>
        <p>{quantity}</p>
        <p>{total}</p>


    </div>

);



function CartPage(props) {


    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {

        fetch(`https://dummyjson.com/carts/${props.props}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.products) {
                    setCartItems(data.products)
                    //console.log(data.products)
                }

            })
            .catch(error => console.error('Error', error));
    }, [props]

    );

    


    return (
        <div>
            {cartItems ? (cartItems.map((product) => (

                <CartItemsList
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    quantity={product.quantity}
                    total={product.total}
                />

            ))) : (<p> Loading...</p>)

            }
            {cartItems.length>1 ? (
                <BillComponent cartItems={cartItems}/>): <p>Loading...</p>}



        </div>
    )

}

export default CartPage;