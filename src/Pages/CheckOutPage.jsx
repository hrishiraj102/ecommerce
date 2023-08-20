import { Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import BillComponent from "../Components/Cart/BillComponent";
import { useEffect, useState } from "react";
function addressView() {
    return (
        <div>
            <Typography variant="h3">
                Your Address
            </Typography>
            <form >
                <label htmlFor="address_line1">Address Line 1:</label>
                <input type="text" id="address_line1" required />
                <label htmlFor="address_line2">Address Line 2:</label>
                <input type="text" id="address_line2" /><br />
                <label htmlFor="city">City:</label>
                <input type="text" id="city" required />
                <label htmlFor="state">State:</label>
                <input type="text" id="state" required />
                <label htmlFor="pincode">Pincode:</label>
                <input type="number" id="pincode" required />

            </form>
        </div>
    )
}



const CheckOutPage = () => {
    //Address, Billing data final 
    //Note: Always parameter value of useparams should match the name define in routing 
    const [checkOut, setCheckOut] = useState([]);

    const [idCache, setIdCache] = useState();
    useEffect(() => {
        setIdCache(sessionStorage.getItem('id'));
        fetch(`https://dummyjson.com/carts/${idCache}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.products) {
                    setCheckOut(data.products)
                    //console.log(data.products)
                }

            })
            .catch(error => console.error('Error', error));
    }, [idCache])

    return (
        <div>
            {addressView()}
            {checkOut.length > 1 ? (
                <>
                <BillComponent cartItems={checkOut} />
                <button type="submit" onClick={()=> alert("Coming soon!")}>Order Confirm</button>

                </>


            ) : <p>Loading...</p>}

        </div>
    )
}

export default CheckOutPage;