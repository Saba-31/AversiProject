import React from 'react';
import productCatalogItems from './productCatalogItems';
import "./ProductCatalog.css"

const ProductCatalog = () => {
    return (
        <div className='prodCards'>
            {productCatalogItems.map(item => {
                return (
                    <div className='prodCard' key={item.id}>
                        <img src={item.img} alt="prodImg" className='prodImg' />
                        <h4 className='prodTitle'>{item.title}</h4>
                    </div>
                )
            })}
        </div>
    );
}

export default ProductCatalog;
