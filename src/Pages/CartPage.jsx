import { useEffect } from "react";

function CartPage(props){

    useEffect(()=>{
        fetch('https://dummyjson.com/carts/user/5')
        .then(res=> res.json())
        .then(console.log);

    })

}