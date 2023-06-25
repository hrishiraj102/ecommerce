import { useEffect, useState } from "react"
import productData from "../../assets/artStore.json"
import { Grid, Typography } from "@mui/material";



const Productlist = ({ name, price, image, rating }) => (
    <Grid height="300px"
        width="250px">

        <img src={image} alt={name} style={{ height: "300px", width: "250px" }} /><br />
        <Typography variant="body">{name}</Typography>
        <Typography variant="body2">{price}</Typography>
        <Typography variant="body2">{rating}</Typography>
    </Grid>

);

const SortByPrice = (props) =>{
    const[productPrice,setProductPrice] = useState([]);
    
    useEffect(()=>{
        setProductPrice(productData.products);
    },[]) 

    
   
    
    return (


        // props.props refer to the value from productpage and for value one 
        // I am putting accending and for not 1 value putting descending logic
        <>
            {props.props ===1 ? (productPrice
            .sort((a,b) => a.price - b.price)
            .map((product)=> (
                <Productlist 
                    key ={product.id}
                    name={product.pname}
                    price={product.price}
                    rating={product.rating}
                    image={product.link}

                />

            ))):(productPrice
                .sort((a,b) => b.price - a.price)
                .map((product)=> (
                    <Productlist 
                        key ={product.id}
                        name={product.pname}
                        price={product.price}
                        rating={product.rating}
                        image={product.link}
    
                    />
    
                )))
            
            
        }

        
        </>
    )
    
}

export default SortByPrice;