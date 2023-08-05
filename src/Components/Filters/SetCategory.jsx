import { Typography } from "@mui/material";
import { useEffect, useState } from "react"




const SetCategory = () => {
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
        sessionStorage.setItem('currentCategory', currCategory);
        console.log(currCategory);

    }

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

export default SetCategory;