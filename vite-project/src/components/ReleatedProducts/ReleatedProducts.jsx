import React from 'react';
import "./ReleatedProducts.css"
import data_product from '../assets/data';
import Item from '../Item/Item';

function ReleatedProducts() {
    return (
        <div className='releatedProducts'>
            <h1>Releated Products</h1>
            <hr />
            <div className="releatedProducts-item">
            {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
            </div>
        </div>
    );
}

export default ReleatedProducts;