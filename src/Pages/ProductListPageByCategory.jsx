import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductListPageByCategory =() =>{
    const {cat} = useParams();
    const [productList1,setProductList1] = useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${cat}`)
        .then(res => res.json())
        .then((data) => {
           
            setProductList1(data.products)
            console.log(data.products);
        })
    },[]);


    return(
        <div>
           


        </div>
    )
}

export default ProductListPageByCategory;