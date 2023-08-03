import { useEffect, useState } from "react"
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

function FilterByBrand({ props }) {
    const [productBrand, setBrand] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json()
            )
            .then((data) => setBrand(data.products))

    }, [props]);

    let filterValue = [];

    switch (props) {
        case props:
            filterValue = productBrand.filter(products =>
                products.brand === `${props}`)
            break;

    }

    return (

        <>

            {filterValue.map((products) => (
                <Productlist
                    key={products.id}
                    id={products.id}
                    name={products.title}
                    price={products.price}
                    rating={products.rating}
                    image={products.thumbnail}
                />
            ))}

        </>
    )


}

export default FilterByBrand;