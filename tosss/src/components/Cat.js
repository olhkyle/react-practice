import React, { forwardRef, useEffect } from 'react';

const Cat = forwardRef((props,ref) => {
    console.log('자식 컴포넌트')

    useEffect(() => {
        console.log(ref);
    }, [])

    return(
        <>
        <img
          src="https://static01.nyt.com/images/2016/03/30/universal/ko/well_cat-korean/well_cat-superJumbo-v2.jpg?quality=90&auto=webp"
          alt="cat"
          ref={ref}
          style={{ width: "150px" }}
        ></img>
        </>
    )
});

export default Cat;