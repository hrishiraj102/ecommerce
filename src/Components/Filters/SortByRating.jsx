import { useEffect, useState } from "react";
import productData from "../../assets/artStore.json"
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Productlist = ({ id, name, price, image, rating }) => (
    <Grid height="320px"
        width="280px">
        <Link to={`/product/${id}`}>
            <img src={image} alt={name} style={{ height: "260px", width: "250px" }} /><br />

            <Typography variant="body">{name}</Typography>
            <Typography variant="body2">{price}</Typography>
            <Typography variant="body2">{rating}</Typography>
        </Link>
    </Grid>

);

function SortByRating() {

    const [Rating, setRating] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setRating(data.products))


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
            {sortData.map((products) => (
                <Productlist
                    key={products.id}
                    id={products.id}
                    name={products.title}
                    price={products.price}
                    rating={products.rating}
                    image={products.thumbnail}
                />
            )

            )}


        </>

    )







}

export default SortByRating;