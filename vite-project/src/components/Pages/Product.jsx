import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrums from '../BreadCrums/BreadCrums';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import ReleatedProducts from '../ReleatedProducts/ReleatedProducts';

function Product() {

    const {all_product} = useContext(ShopContext)
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    return (
        <div className='product'>
            <BreadCrums product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox />
            <ReleatedProducts />
        </div>
    );
}

export default Product;