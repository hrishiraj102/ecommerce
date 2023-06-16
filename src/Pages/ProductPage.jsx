import { useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import ProductCall from "../Components/ProductCall";
import FilterByPrice from "../Components/Filters/FilterByPrice";




function ProductPage() {


    return (
        <>
       {/* <ProductCall /> */}
        <FilterByPrice />
        </>
    )



}

export default ProductPage;