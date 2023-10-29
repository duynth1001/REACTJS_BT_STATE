import React from 'react'

export const ProductItem = (props) => {
    const { product, handleProductDetail } = props
    console.log('product: ', product)
    return (
        <div className="col-3 mt-3">
            <div className="card">
            <div class="text-center">
                <img  src={product.url} style={{width:'10rem'}}  />
                </div>
                <div className="card-body">
                    <p className="card-title">{product.name}</p>
                    <p>Price: {product.price}$</p>
                    <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-outline-dark"
                            onClick={() => handleProductDetail(product)}
                        >
                            Try
                        </button>
                  
                    </div>
                </div>
            </div>
        </div>
    )
}
