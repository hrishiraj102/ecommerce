const ProductDetailsImage=({thumbnail,images})=>{
    return(
        <div>
            {/* Thumbnail */}
            <img src={thumbnail} alt="thumbnail"/> 
            <img src={images[3]} alt="img1"/>
            <img src={images[2]} alt= "img2"/>
            <img src={images[1]} alt="img3"/>
            <img src={images[0]} alt="img3"/>
        </div>
    )

}
export default ProductDetailsImage;