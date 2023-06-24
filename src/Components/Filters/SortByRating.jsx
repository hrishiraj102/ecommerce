import { useEffect, useState } from "react";
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

function SortByRating() {

    const [Rating, setRating] = useState([]);

    useEffect(() => {
        setRating(productData.products);
    }, []);

    const sortData = Rating.sort((a, b) => {
        if (b.rating > a.rating) {
            return 1;
        }
        if (a.rating > b.rating) {
            return -1;
        }
        return 0;
    }


    );

    return (
        <>
            {sortData.map((product) => (
                <Productlist
                    key={product.id}
                    name={product.pname}
                    price={product.price}
                    rating={product.rating}
                    image={product.link}
                />
            )

            )}


        </>

    )







}

export default SortByRating;