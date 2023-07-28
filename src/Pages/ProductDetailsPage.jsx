import { useEffect, useState } from "react";
import { ProductDetailsReturn } from "../Components/ProductDetails/ProductDetailsReturn";
import { useParams } from "react-router-dom";

function ProductDetailsPage(props) {

    const [productAPI, setProductAPI] = useState();
    const {id}= useParams();

    useEffect(() => {
        
        // props.props because props itself a obj so to get the variable we need to call its value
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setProductAPI(data);
            })
            .catch(error => {
                console.error('Error:', error);

            });
    },[]);

    return (
        <div>
            {/* Render the product details */}
            {productAPI ? (
                <ProductDetailsReturn
                    key={productAPI.id}
                    title={productAPI.title}
                    price={productAPI.brand}
                    description={productAPI.description}
                    brand={productAPI.brand}
                    rating={productAPI.rating}
                    images={productAPI.images}
                    thumbnail={productAPI.thumbnail}
                />
            ) : (
                <p>Loading...</p>
            )}


        </div>
    )
}

export default ProductDetailsPage;