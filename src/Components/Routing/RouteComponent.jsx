import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom"
import ProductListPage from "../../Pages/ProductListPage"
import LoginPage from "../../Pages/LoginPage"
import CartPage from "../../Pages/CartPage"


const RouteComponent = () => {



    return (
        <>

            <BrowserRouter>
                <div>


                    
                    <div>
                        <Routes>
                            <Route exact path="/" element={<ProductListPage/>} />
                            
                            <Route path="/cartpage" element={<CartPage/>} />
                            <Route path="/loginpage" element={<LoginPage/>}/>
                        </Routes>

                    </div>
                </div>

            </BrowserRouter>

        </>

    )

}
export default RouteComponent;