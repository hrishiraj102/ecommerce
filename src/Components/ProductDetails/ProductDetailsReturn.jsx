import { Grid } from "@mui/material";
import RatingStar from "../UI/RatingStar";
import ProductDetailsImage from "./ProductDetailsImage";

export const ProductDetailsReturn = ({ title, brand, description, rating,price,images,thumbnail }) => {

    return (
        <Grid  >
            <ProductDetailsImage images={images} 
                thumbnail={thumbnail}/>
            <h2>{title}</h2>
            <p>Brand: {brand}</p>
            <p>Description: {description}</p>
            <p>Price: ${price}</p>
            <p>Rating: {<RatingStar rating= {rating}/>}</p>
            
            {/* Render additional product details */}
        </Grid>
    )
};