import { useEffect, useState } from "react"

const BillComponent = ({cartItems}) => {

    //We need to get price of all the items in the cart and do a calculation
    const [grandTotal,setGrandTotal]=useState(0);
    const deliveryCharge=100;
   
    useEffect(()=>{
        console.log(cartItems.map((product)=> product.price));
        const CalculatetotalPrice=(cartItems)=>{
            
            var Price= cartItems.map((item)=> (item.price));
            //accumulator is the total till i iteration and currentvalue is the current price
            
            var totalPrice= Price.reduce((accumulator,currentValue)=> accumulator+currentValue); 
            //Reduce iterate and give total
            return totalPrice;
        }
        setGrandTotal(CalculatetotalPrice(cartItems));
    },[cartItems]);
    
    
    console.log(grandTotal);
    
    return (
        <>
            <p>Total Price: ₹ {grandTotal}</p>
            <p>Delivery Charge: ₹ {deliveryCharge}</p>
            <p>Grand Total: ₹ {grandTotal+ deliveryCharge}</p>
        </>
    )
    


}

export default BillComponent;