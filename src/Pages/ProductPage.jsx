import { useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import ProductCall from "../Components/ProductCall";
import FilterByPrice from "../Components/Filters/FilterByPrice";




function ProductPage() {
    const [productList, setProductList] = useState(<ProductCall />)
    const [checkList, setCheckList] = useState(0);
    const handleFilterChange = (filterValue) => {
        setProductList(<FilterByPrice props={filterValue} />)
        setCheckList(filterValue)
    }




    return (
        <div>

            <div>
                <label>
                    <input type="radio" name="filter" value={1} checked={checkList === 1} onChange={() => handleFilterChange(1)} />
                    Above 1000
                </label>
                <label>
                    <input type="radio" name="filter" value={2} checked={checkList === 2} onChange={() => handleFilterChange(2)} />
                    500 to 1000
                </label>
                <label>
                    <input type="radio" name="filter" value={3} checked={checkList === 3} onChange={() => handleFilterChange(3)} />
                    Below 500
                </label>
            </div>

            {productList}




            {/* <FilterByPrice props = {3}/> */}
        </div>
    )



}

export default ProductPage;