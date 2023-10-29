import React from 'react'
import { ProductItem } from './ProductItem'
export  const ProductList = (props) => {
    const {data,handleProductDetail} =props
  return (
    <div className="container row">
    {data.map((product) => {
        return (
            <ProductItem
                key={product.id}
                product={product}
                handleProductDetail={handleProductDetail}
            />
        )
    })}
</div>
  )
}

