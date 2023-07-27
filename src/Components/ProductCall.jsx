import { useEffect, useState } from "react";
import productsData from "../assets/artStore.json";
import { Box, Grid, Typography } from "@mui/material";


const Productlist = ({ name, price, image, rating }) => (
    <Grid height="300px"
        width="250px">

        <img src={image} alt={name} style={{ height: "300px", width: "250px" }} /><br />
        <Typography variant="body">{name}</Typography>
        <Typography variant="body2">{price}</Typography>
        <Typography variant="body2">{rating}</Typography>
    </Grid>

);


const ProductCall = () => {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        setProducts(productsData.products);
    }, []);

    return (
        <div  >


            {product.map((products) => (

                <Productlist
                    key={products.id}
                    name={products.pname}
                    price={products.price}
                    rating={products.rating}
                    image={products.link}
                />

            )
            )
            }


        </div>
    );


};
export default ProductCall;