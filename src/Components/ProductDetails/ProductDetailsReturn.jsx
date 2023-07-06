import ProductDetailsImage from "./ProductDetailsImage";

export const ProductDetailsReturn = ({ title, brand, description, rating,price,images,thumbnail }) => {

    return (
        <div>

            <h2>{title}</h2>
            <p>Brand: {brand}</p>
            <p>Description: {description}</p>
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
            <ProductDetailsImage images={images} 
                thumbnail={thumbnail}/>
            {/* Render additional product details */}
        </div>
    )
};