import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom"
import ProductListPage from "../../Pages/ProductListPage"
import LoginPage from "../../Pages/LoginPage"
import CartPage from "../../Pages/CartPage"
import ProductDetailsPage from "../../Pages/ProductDetailsPage"
import ProductCall from "../ProductCall"
import ProductListPageByCategory from "../../Pages/ProductListPageByCategory"
import CheckOutPage from "../../Pages/CheckOutPage"


const RouteComponent = () => {



    return (
        <>

            <BrowserRouter>
                
                        <Routes>
                            <Route exact path="/" element={<ProductListPage />} />
                            <Route path="/product/:id" element={<ProductDetailsPage />} />
                            <Route path="/cartpage" element={<CartPage />} />
                            <Route path="/loginpage" element={<LoginPage />} />
                            <Route path="/category/:cat" element={<ProductListPageByCategory  />}/>
                            <Route path="/checkout" element={<CheckOutPage />}/>
                        </Routes>

                
                

            </BrowserRouter>

        </>

    )

}
export default RouteComponent;