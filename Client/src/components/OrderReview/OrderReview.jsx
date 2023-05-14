import React, { useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../Utilities/fakedb';

const OrderReview = () => { 
    const cartSavedCart = useLoaderData(); 
    const [cart , setCart] = useState(cartSavedCart)
    // console.log(cart); 
    const  handelClearCart = ()=>{
        setCart([])
        deleteShoppingCart(); 
    }
    const deleteProduct =(id)=>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining); 
        // console.log(remaining , 'remaining')
        removeFromDb(id)
        // console.log(cart , 'cart')
    }
    return (
        <div className='flex justify-between'>
            <div className=" w-[60%] mx-auto">
                {
                    cart.map(product => <ReviewItem deleteProduct={deleteProduct} key={product.id} product={product}/>)
                }
            </div>
            <div className="cart">
                <Cart  handelClearCart={handelClearCart} cart={cart}/>
            </div>
        </div>
    );
};

export default OrderReview;