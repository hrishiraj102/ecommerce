import { useEffect, useState } from "react";

import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import ProductCall from "../Components/ProductCall";
import FilterByPrice from "../Components/Filters/FilterByPrice";
import FilterByBrand, { brandList } from "../Components/Filters/FilterByBrand";
import SortByRating from "../Components/Filters/SortByRating";
import SortByPrice from "../Components/Filters/SortByPrice";
import { Link, Outlet } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ResponsiveAppBar from "../Components/UI/ResponsiveAppBar";



function ProductListPage() {
    const [productList, setProductList] = useState()
    const [brands, setBrands] = useState([]); //brandAPI
    const [checkList, setCheckList] = useState(0);      //Using it for removing check from other options of price
    const [checkList2, setCheckList2] = useState();    //Using it for removing check from other options of brand



    //Calling Api
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json()


            ).then((data) => {

                const ar = Array.from(new Set(data.products.map((data) => data.brand)))  //First I converted all the brands to set than converted to array 

                setBrands(ar) //Set of all the brands




            });

    }, [])

    useEffect(() => {
        setProductList(<ProductCall category={'All'} />)
    }, [])

    //Updating to default of item from cache when link click

    const navBar = () => {
        return (
            <Grid2>
                <ResponsiveAppBar />

            </Grid2>
        )
    }

    //Filter by Price
    const filterViewByPrice = () => {
        return (
            <div>
                <Typography variant="h6" >Filter By Price</Typography>
                <Stack>
                    <label>
                        <input type="radio" name="filterByPrice" value={1} checked={checkList === 1} onChange={() => handleFilterByPrice(1)} />
                        Above 1000
                    </label>
                    <label>
                        <input type="radio" name="filterByPrice" value={2} checked={checkList === 2} onChange={() => handleFilterByPrice(2)} />
                        500 to 1000
                    </label>
                    <label>
                        <input type="radio" name="filterByPrice" value={3} checked={checkList === 3} onChange={() => handleFilterByPrice(3)} />
                        Below 500
                    </label>
                </Stack>
            </div>
        )


    }

    const handleFilterByPrice = (filterValue) => {
        setProductList(<FilterByPrice props={filterValue} />)
        setCheckList(filterValue)
        setCheckList2(0)
    }





    //Filter By brand name 


    const filterViewByBrand = () => {

        return (
            <div>

                <Typography variant="h6" >Filter by Brand</Typography>
                {brands.map((brand, index) => (

                    <Stack key={index}>
                        <label>
                            <input type="radio" name="filterByBrand" value={brand} checked={checkList2 === brand} onChange={() => handleBrandChange(brand)} />
                            {brand}

                        </label>
                    </Stack>

                )

                )}

            </div>
        )

    }
    const handleBrandChange = (filterValue) => {
        setProductList(<FilterByBrand props={filterValue} />)
        setCheckList2(filterValue)
        setCheckList(0)

    }

    //sorting products by descending of Rating
    const viewSortbyRating = () => {
        return (
            <>
                <Typography variant="h6" >Sort By Rating</Typography>
                <button type="button" onClick={handleRateSortByDecending}>Sort by Rating</button>
            </>
        )
    }
    const handleRateSortByDecending = () => {
        setProductList(<SortByRating />)
        setCheckList(0)
        setCheckList2(0)
    }


    //Sort by both low to high and high to low Price

    const viewSortbyPrice = () => {
        return (
            <>
                <Typography variant="h6" >Sort By Price</Typography>
                <button type="button" onClick={() => handlePriceSort(1)}>Low to High</button>
                <button type="button" onClick={() => handlePriceSort(2)}>High to Low</button>
            </>
        )
    }
    function handlePriceSort(variable) {
        setProductList(<SortByPrice props={variable} />)
        setCheckList(0)
        setCheckList2(0)
    }

    //Category 
    const getCategory = sessionStorage.getItem('currentCategory');
    const [checkCategory, setCheckCategory] = useState(getCategory);
    const [listOfCategory, setListOfCategory] = useState([]);
    useEffect(() => {

        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data => setListOfCategory(data));

    }, []);

    const handleCategory = (currCategory) => {
        setCheckCategory(currCategory);


        setProductList(<ProductCall category={currCategory} />)

    }

    //Category box
    const SetCategory = () => {
        return (
            <Grid2 width={"200px"}>

                <Grid >
                    <FormControl fullWidth>
                        <InputLabel sx={{ alignContent: "center" }} id="category">List Of Category</InputLabel>
                        <Select
                            labelId="category"


                            label="Cat"

                        >

                            <MenuItem type='radio' value={"All"} checked={checkCategory === "All"} onClick={() => handleCategory("All")} >
                                All
                            </MenuItem>
                            {listOfCategory.map((data) =>
                                <MenuItem type='radio' value={data} checked={checkCategory === data} onClick={() => handleCategory(data)}>
                                    {data}
                                </MenuItem>


                            )}

                        </Select>
                    </FormControl>
                </Grid>
            </Grid2>

        )
    }



    return (


        <Grid2 spacing={2}>
            <Grid  spacing={"2px"}>
                {navBar()}
            </Grid>
            <Grid >
                {<SetCategory />}
            </Grid>

            <Grid container sx={{direction:"row"}} >
                <Grid sx={{ height: "200px", width: "300px" }} item xs={12} md={3}>
                    <Grid>
                        {filterViewByPrice()}



                        {filterViewByBrand()}


                        {viewSortbyRating()}

                        {viewSortbyPrice()}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={9}>
                <Grid container>
                    {productList}
                </Grid>
                </Grid>
            </Grid>
        </Grid2>


    )



}

export default ProductListPage;