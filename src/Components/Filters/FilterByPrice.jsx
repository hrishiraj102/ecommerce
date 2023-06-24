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



function FilterByPrice ({props}) {

    const [productPrice, setProductPrice] = useState([]);

    useEffect(() => {
        setProductPrice(productData.products);

    }, []);

    let filterValue= [];

    if(props ===1){
        filterValue = productPrice.filter(products =>

            products.price > 1000
    
        );
    }
    else if(props===2){
        filterValue = productPrice.filter(products =>
            500>= products.price <=1000
    
    
    
            );

    }
    else if(props===3){
        filterValue = productPrice.filter(products =>
            products.price <500
        
        );

    }

        

    return (

        <>

           
            {filterValue.map((products) => (
                <Productlist
                    key={products.id}
                    name={products.pname}
                    price={products.price}
                    rating={products.rating}
                    image={products.link}
                />

            ))}
        </>
    )






}
export default FilterByPrice;