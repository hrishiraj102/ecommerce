import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import BillComponent from "../Components/Cart/BillComponent";
import { Link } from "react-router-dom";
import CheckOutPage from "./CheckOutPage";
import ResponsiveAppBar from "../Components/UI/ResponsiveAppBar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const CartItemsList = ({ title, price, quantity, total }) => (
    <div>

        <p>{title}</p>
        <p>{price}</p>
        <p>{quantity}</p>
        <p>{total}</p>


    </div>

);

const CheckOutBtn = (cartItems) => {
    const cartItemJson = JSON.stringify(cartItems)
    return (
        <>

            <Link to={`/checkout`}>Proceed To Checkout</Link>
        </>
    )

}



function CartPage() {


    const [cartItems, setCartItems] = useState([]);
    const [idCache, setIdCache] = useState();
    useEffect(() => {
        setIdCache(sessionStorage.getItem('id'));
        fetch(`https://dummyjson.com/carts/${idCache}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.products) {
                    setCartItems(data.products)
                    //console.log(data.products)
                }

            })
            .catch(error => console.error('Error', error));
    }, [idCache]

    );





    return (
        <div>
            <Grid2>
                <ResponsiveAppBar/>
               
            </Grid2>
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
            {cartItems.length > 1 ? (
                <>

                    <BillComponent cartItems={cartItems} />
                    <CheckOutBtn cartItems={cartItems} />
                </>


            ) : <p>Loading...</p>}



        </div>
    )

}

export default CartPage;