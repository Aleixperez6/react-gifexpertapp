import React, { useState } from 'react'
import AddCategory from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';
//rafc tab
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);


    // const handleAdd = (e) => {
    //     setCategories( [...categories, e] )
    // }

    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory  setCategories={setCategories} />
        <hr />

        <ol>
            {
            categories.map(category => (
                <GifGrid 
                key={category}
                category={category} />
            ))
            }
        </ol>
        </>

    )
}

export default GifExpertApp;


