import { useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import ProductCall from "../Components/ProductCall";
import FilterByPrice from "../Components/Filters/FilterByPrice";
import FilterByBrand from "../Components/Filters/FilterByBrand";
import SortByRating from "../Components/Filters/SortByRating";




function ProductPage() {
    const [productList, setProductList] = useState(<ProductCall />)
    
    const [checkList, setCheckList] = useState(0);
    const [checkList2, setCheckList2] = useState(0);
    const handleFilterChange = (filterValue) => {
        setProductList(<FilterByPrice props={filterValue} />)
        setCheckList(filterValue)
        setCheckList2(0)
    }

    const handleRateSortByDecending= () =>{
        setProductList(<SortByRating/>)
        setCheckList(0)
        setCheckList2(0)
    }

    const handleBrandChange= (filterValue)=> {
        setProductList(<FilterByBrand props={filterValue} />)
        setCheckList2(filterValue)
        setCheckList(0)

    }




    return (
        <div>

            <div>
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
                <button type="button" onClick={handleRateSortByDecending}>Sort by Rating</button>
            </div>

            {productList}
            

            {/* <FilterByPrice props = {3}/> */}
        </div>
    )



}

export default ProductPage;