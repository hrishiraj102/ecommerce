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



function FilterByPrice({ props }) {

    const [productPrice, setProductPrice] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProductPrice(data.products))


    }, []);

    let filterValue = [];

    if (props === 1) {
        filterValue = productPrice.filter(products =>

            products.price > 1000

        );
    }
    else if (props === 2) {
        filterValue = productPrice.filter(products =>
            500 >= products.price <= 1000



        );

    }
    else if (props === 3) {
        filterValue = productPrice.filter(products =>
            products.price < 500

        );

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
export default FilterByPrice;