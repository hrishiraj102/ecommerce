import { useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import ProductCall from "../Components/ProductCall";
import FilterByPrice from "../Components/Filters/FilterByPrice";
import FilterByBrand, { brandList } from "../Components/Filters/FilterByBrand";
import SortByRating from "../Components/Filters/SortByRating";
import SortByPrice from "../Components/Filters/SortByPrice";
import { Link, Outlet } from "react-router-dom";
import SetCategory from "../Components/Filters/SetCategory";


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
    
    useEffect(()=>{
        setProductList(<ProductCall category={'All'} />)
    },[])

    //Updating to default of item from cache when link click
    const handleShopLinkChange = () => {
        window.sessionStorage.setItem('currentCategory', 'All')
    }

    const navBar = () => {
        return (
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"} onClick={handleShopLinkChange()}>Shop</Link>
                        </li>
                        <li>
                            <Link to={"/loginpage"}>Login</Link>
                        </li>
                        <li>
                            <Link to={"/cartpage"}>My Cart</Link>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }

    //Filter by Price
    const filterViewByPrice = () => {
        return (
            <div>
                <Typography variant="h6" >Filter By Price</Typography>
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
      
        
        setProductList(<ProductCall category={currCategory}/>)
    
    }
    
    const SetCategory=()=>{
        return (
            <div>
                <Typography variant="h6">List Of Category</Typography>
                <div>
                    <span >
                        <label>
                            <input type='radio' value={"All"} checked={checkCategory === "All"} onChange={() => handleCategory("All")} />
                            All
                        </label>
                    </span>
                    {listOfCategory.map((data) =>
                        <span key={data}>
                            <label>
                                <input type='radio' value={data} checked={checkCategory === data} onChange={() => handleCategory(data)} />
                                {data}
                            </label>
                        </span>
                    )}
    
                </div>
            </div>
    
        )
    }



    return (
        <div>
            {navBar()}
            <div>
                {<SetCategory />}
            </div>
            <div>
                {filterViewByPrice()}
            </div>

            <div>
                {filterViewByBrand()}

            </div>
            <div>
                {viewSortbyRating()}
            </div>
            <div>
                {viewSortbyPrice()}
            </div>
            {productList}
        </div>
    )



}

export default ProductListPage;