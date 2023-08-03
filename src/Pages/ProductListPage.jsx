import { useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import ProductCall from "../Components/ProductCall";
import FilterByPrice from "../Components/Filters/FilterByPrice";
import FilterByBrand, { brandList } from "../Components/Filters/FilterByBrand";
import SortByRating from "../Components/Filters/SortByRating";
import SortByPrice from "../Components/Filters/SortByPrice";
import { Link, Outlet } from "react-router-dom";


function ProductListPage() {
    const [productList, setProductList] = useState(<ProductCall />)
    const [productAPI, setProductAPI] = useState([]); //Storing products
    const [brands, setBrands] = useState([]); //brandAPI
    const [checkList, setCheckList] = useState(0);      //Using it for removing check from other options of price
    const [checkList2, setCheckList2] = useState();    //Using it for removing check from other options of brand

    //Calling Api
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json()


            ).then((data) => {

                const ar = Array.from(new Set(data.products.map((data) => data.brand)))  //First I converted all the brands to set than converted to array 
                console.log(ar)
                setBrands(ar) //Set of all the brands




            });

    }, [])


    //Filter by Price
    const handleFilterChange = (filterValue) => {
        setProductList(<FilterByPrice props={filterValue} />)
        setCheckList(filterValue)
        setCheckList2(0)
    }


    //sorting products by descending of Rating
    const handleRateSortByDecending = () => {
        setProductList(<SortByRating />)
        setCheckList(0)
        setCheckList2(0)
    }


    //Filter By brand name 


    const filterViewByBrand = () => {

        return (
            <div>

                <Typography variant="h6" >Filter by Brand</Typography>
                {brands.map((brand, index) => (

                    <span key={index}>
                        <label>
                            <input type="radio" name="filterByBrand" value={brand} checked={checkList2 === brand} onChange={() => handleBrandChange(brand)} />
                            {brand}

                        </label>
                    </span>

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




    //Sort by both low to high and high to low Price
    function handlePriceSort(variable) {
        setProductList(<SortByPrice props={variable} />)
        setCheckList(0)
        setCheckList2(0)
    }



    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Shop</Link>
                    </li>
                    <li>
                        <Link to={"/loginpage"}>Login</Link>
                    </li>
                    <li>
                        <Link to={"/cartpage"}>My Cart</Link>
                    </li>




                </ul>
            </nav>
            <Outlet />
            <div>
                <Typography variant="h6" >Filter By Price</Typography>
                <label>
                    <input type="radio" name="filterByPrice" value={1} checked={checkList === 1} onChange={() => handleFilterChange(1)} />
                    Above 1000
                </label>
                <label>
                    <input type="radio" name="filterByPrice" value={2} checked={checkList === 2} onChange={() => handleFilterChange(2)} />
                    500 to 1000
                </label>
                <label>
                    <input type="radio" name="filterByPrice" value={3} checked={checkList === 3} onChange={() => handleFilterChange(3)} />
                    Below 500
                </label>
            </div>

            <div>
                {filterViewByBrand()}

            </div>
            <div>
                <Typography variant="h6" >Sort By Rating</Typography>
                <button type="button" onClick={handleRateSortByDecending}>Sort by Rating</button>
            </div>
            <div>
                <Typography variant="h6" >Sort By Price</Typography>
                <button type="button" onClick={() => handlePriceSort(1)}>Low to High</button>
                <button type="button" onClick={() => handlePriceSort(2)}>High to Low</button>
            </div>

            {productList}


            {/* <FilterByPrice props = {3}/> */}
        </div>
    )



}

export default ProductListPage;