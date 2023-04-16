import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../Utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart , 'cart')
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handelClearCart = () => {
        deleteShoppingCart();
        setCart([]); 
        console.log('hjh')
    }
    useEffect(() => {
        const storedDB = getShoppingCart();
        // console.log(storedDB)
        const storedCart = [];
        // step 1 get id 
        for (const id in storedDB) {
            // step 2 get the product by using id 
            const savedProduct = products.find(product => product.id === id);
            // Step 3 get the quantity from the store 
            if (savedProduct) {
                const quantity = storedDB[id];
                savedProduct.quantity = quantity;
                storedCart.push(savedProduct);
            }
        }
        setCart(storedCart);
        // console.log(storedCart)

    }, [products]);
    const handelCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
        // console.log(id.props)
        // console.log(cart)
    }
    return (
        <div>
            <div className="ml-4 grid grid-cols-5">
                <div className="col-span-4 mt-5 grid grid-cols-3 gap-6">
                    {
                        products.map(product => <Card key={product.id} handelCart={handelCart} props={product}></Card>)
                    }
                </div>
                <div className="col-span-1">
                    <Cart handelClearCart={handelClearCart} cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;