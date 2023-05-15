import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../Utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(10);
    const { totalItem } = useLoaderData();
    // const itemPerPage = 10;
    const totalPage = Math.ceil(totalItem / itemPerPage)
    const pageNumber = [...Array(totalPage).keys()]


    useEffect(() => {
        fetch(`http://localhost:5000/shop?page=${currentPage}&limit=${itemPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, itemPerPage]);
    const handelClearCart = () => {
        deleteShoppingCart();
        setCart([]);
        // console.log('hjh')
    }
    useEffect(() => {
        const storedDB = getShoppingCart();
        console.log(storedDB)
        const storedCart = [];
        /*  // step 1 get id 
         for (const id in storedDB) {
             // step 2 get the product by using id 
             const savedProduct = products.find(product => product._id === id);
             // Step 3 get the quantity from the store 
             if (savedProduct) {
                 const quantity = storedDB[id];
                 savedProduct.quantity = quantity;
                 storedCart.push(savedProduct);
             }
         } */
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.keys(storedDB))
        })
            .then(res => res.json())
            .then(data => {
                console.log("🚀 ~ file: Shop.jsx:52 ~ useEffect ~ data:", data)
                console.log(data)
                setCart(data);
            })
        // console.log(storedCart)

    }, [products]);
    const handelCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product._id);

    }
    const options = [
        { value: 5, label: '5 items per page' },
        { value: 10, label: '10 items per page' },
        { value: 15, label: '15 items per page' },
        // Add more options as needed
    ];
    const handelOptionChange = e => {
        setItemPerPage(parseInt(e.target.value))
    }
    return (
        <div>
            <div className="ml-4 grid grid-cols-5">
                <div className="col-span-4 mt-5 grid grid-cols-3 gap-6">
                    {
                        products.map(product => <Card key={product._id} handelCart={handelCart} product={product}></Card>)
                    }
                </div>
                <div className="col-span-1">
                    <Cart handelClearCart={handelClearCart} cart={cart}></Cart>
                </div>
            </div>
            <div className="text-center my-9">
                <h1>Current Page : {currentPage + 1} and total item is {itemPerPage}</h1>
                {
                    pageNumber.map(item => <button
                        key={item}
                        onClick={() => setCurrentPage(item)}
                        className={`px-3 py-2 mx-1 ${currentPage === item ? 'bg-orange-400' : 'bg-pink-600'} rounded-lg text-white`}
                    >
                        {item + 1}
                    </button>)
                }
                <select onChange={handelOptionChange} value={itemPerPage} name="" className='px-4 outline-none border py-1' id="">
                    {
                        options.map(option => <option key={option.label} value={option.value}>{option.label}</option>)
                    }
                </select>
            </div>
        </div>
    );
};

export default Shop;