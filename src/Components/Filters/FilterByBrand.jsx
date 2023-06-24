import { useEffect, useState } from "react"
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

function FilterByBrand({props}){
    const [productBrand,setBrand] = useState([]);

    useEffect(()=> {
        setBrand (productData.products);
    },[]);

    let filterValue= [];

    switch(props){
        case 1:
            filterValue= productBrand.filter(products =>
                products.brand === "Nike")
                break;
        case 2:
            filterValue= productBrand.filter(products =>
                products.brand ==="Addidas")
                break;
        case 3:
            filterValue= productBrand.filter(products =>
                products.brand === "Reebok")
                break;
        case 4:
            filterValue= productBrand.filter(products =>
                products.brand === "Zudio")
                break;
        

    }

    return (

        <>

            {filterValue.map((products)=> (
                <Productlist 
                    key={products.id}
                    name={products.pname}
                    price={products.price}
                    rating={products.rating}
                    image={products.link}
                />
            ))}

        </>
    )

    
}

export default FilterByBrand;