import React, { useEffect, useState } from 'react'

const Product = (props:any) => {
   // https://cdn.dummyjson.com/product-images/7/1.jpg
   console.log('Props:',props.product );
    return (
        <div className='productCard' >
            <img src={props.product.thumbnail} alt="" className="proImg" />
            <p className="proTitle">{props.product.title}</p>
            <p className="proPrice">$ {props.product.price}</p>
            {/* <p className="proDesc">{props.product.description}</p> */}
        </div>
    )
}

export default Product;
