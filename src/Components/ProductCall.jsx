import { useEffect, useState } from "react";
import productsData from "../assets/artStore.json";
import { Box, Grid, Typography } from "@mui/material";
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


const ProductCall = ({category}) => {
    const [product, setProducts] = useState([]);

   // const [getCategory, setGetCategory] = useState(sessionStorage.getItem('currentCategory'))
    useEffect(() => {

        fetch('https://dummyjson.com/products')
            .then(res => res.json()
            )
            .then((data) => setProducts(data.products))
            

        //setProducts(productsData.products);
    }, []);
    const filteredProducts = category === 'All' ? product : product.filter((e)=> e.category === category);

    return (
        <div  >


            {filteredProducts.map((products) => (

                <Productlist
                    key={products.id}
                    id={products.id}
                    name={products.title}
                    price={products.price}
                    rating={products.rating}
                    image={products.thumbnail}
                />

            )
            )
            }


        </div>
    );


};
export default ProductCall;