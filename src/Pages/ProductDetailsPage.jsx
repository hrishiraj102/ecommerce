import { useEffect, useState } from "react";
import { ProductDetailsReturn } from "../Components/ProductDetails/ProductDetailsReturn";
import { useParams } from "react-router-dom";
import ResponsiveAppBar from "../Components/UI/ResponsiveAppBar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Grid } from "@mui/material";

function ProductDetailsPage(props) {

    const [productAPI, setProductAPI] = useState();
    const {id}= useParams();

    const navBar = () => {
        return (
            <Grid2>
                <ResponsiveAppBar />

            </Grid2>
        )
    }

    useEffect(() => {
        
        // props.props because props itself a obj so to get the variable we need to call its value
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setProductAPI(data);
            })
            .catch(error => {
                console.error('Error:', error);

            });
    },[]);

    return (
        <Grid>
            <Grid  spacing={"2px"}>
                {navBar()}
            </Grid>
       
            
            {productAPI ? (
                <ProductDetailsReturn
                    key={productAPI.id}
                    title={productAPI.title}
                    price={productAPI.price}
                    description={productAPI.description}
                    brand={productAPI.brand}
                    rating={productAPI.rating}
                    images={productAPI.images}
                    thumbnail={productAPI.thumbnail}
                />
            ) : (
                <p>Loading...</p>
            )}


        </Grid>
    )
}

export default ProductDetailsPage;