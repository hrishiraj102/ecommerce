import { useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import ProductCall from "../Components/ProductCall";
import FilterByPrice from "../Components/Filters/FilterByPrice";
import FilterByBrand from "../Components/Filters/FilterByBrand";
import SortByRating from "../Components/Filters/SortByRating";
import SortByPrice from "../Components/Filters/SortByPrice";




function ProductPage() {
    const [productList, setProductList] = useState(<ProductCall />)

    const [checkList, setCheckList] = useState(0);      //Using it for removing check from other options of price
    const [checkList2, setCheckList2] = useState(0);    //Using it for removing check from other options of brand
    

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
            <Typography variant="h6" >Filter by Brand</Typography>
                <label>
                    <input type="radio" name="filterByBrand" value={1} checked={checkList2 === 1} onChange={() => handleBrandChange(1)} />
                    Nike
                </label>
                <label>
                    <input type="radio" name="filterByBrand" value={2} checked={checkList2 === 2} onChange={() => handleBrandChange(2)} />
                    Addidas
                </label>
                <label>
                    <input type="radio" name="filterByBrand" value={3} checked={checkList2 === 3} onChange={() => handleBrandChange(3)} />
                    Reebok
                </label>
                <label>
                    <input type="radio" name="filterByBrand" value={4} checked={checkList2 === 4} onChange={() => handleBrandChange(4)} />
                    Zudio
                </label>
            </div>
            <div>
                <Typography variant="h6" >Sort By Rating</Typography>
                <button type="button" onClick={handleRateSortByDecending}>Sort by Rating</button>
            </div>
            <div>
                <Typography variant="h6" >Sort By Price</Typography>
                <button type="button" onClick={()=>handlePriceSort(1)}>Low to High</button>
                <button type="button" onClick={()=>handlePriceSort(2)}>High to Low</button>
            </div>

            {productList}


            {/* <FilterByPrice props = {3}/> */}
        </div>
    )



}

export default ProductPage;