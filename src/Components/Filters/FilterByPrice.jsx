import { useEffect, useState } from "react"
import productData from "../../assets/artStore.json"
import { Grid, Typography } from "@mui/material";


const Productlist = ({ name, price, image }) => (
    <Grid height="300px"
        width="250px">

        <img src={image} alt={name} style={{ height: "300px", width: "250px" }} /><br />
        <Typography variant="body">{name}</Typography>
        <Typography variant="body2">{price}</Typography>
    </Grid>

);



const FilterByPrice = () => {

    const [productPrice, setProductPrice] = useState([]);

    useEffect(() => {
        setProductPrice(productData.products);

    }, []);


    const productAbove1000 = productPrice.filter(products =>

        products.price >= 150

    );




    return (

        <>

            {productAbove1000.map((products) => (
                <Productlist
                    key={products.id}
                    name={products.pname}
                    price={products.price}
                    image={products.link}
                />

            ))}
        </>
    );






}
export default FilterByPrice;