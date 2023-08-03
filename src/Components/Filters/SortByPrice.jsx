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

const SortByPrice = (props) => {
    const [productPrice, setProductPrice] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json()
            )
            .then((data) => setProductPrice(data.products))

    }, [props])




    return (


        // props.props refer to the value from productpage and for value one 
        // I am putting accending and for not 1 value putting descending logic
        <>
            {props.props === 1 ? (productPrice
                .sort((a, b) => a.price - b.price)
                .map((products) => (
                    <Productlist
                        key={products.id}
                        id={products.id}
                        name={products.title}
                        price={products.price}
                        rating={products.rating}
                        image={products.thumbnail}
                    />


                ))) : (productPrice
                    .sort((a, b) => b.price - a.price)
                    .map((products) => (
                        <Productlist
                            key={products.id}
                            id={products.id}
                            name={products.title}
                            price={products.price}
                            rating={products.rating}
                            image={products.thumbnail}
                        />


                    )))


            }


        </>
    )

}

export default SortByPrice;