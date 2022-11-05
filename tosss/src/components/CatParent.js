import React, {useRef}from 'react'
import Cat from './Cat'

export default function CatParent(){
    const ref = useRef();

    return(
        <>
        <img
          src="https://static01.nyt.com/images/2016/03/30/universal/ko/well_cat-korean/well_cat-superJumbo-v2.jpg?quality=90&auto=webp"
          alt="cat"
          ref={ref}
          style={{ width: "150px" }}
        ></img>
        <Cat ref={ref}/>
        </>
    )
}