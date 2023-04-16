import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({ product, deleteProduct }) => {
    console.log('first', product);
    const { name, id, price, quantity, img } = product;
    return (
        <div className='border flex pl-2 pr-5 py-2 justify-between rounded-xl mb-4'>
            <div className="flex">
                <img src={img} className='h-[90px] rounded-lg w-[90px]' alt="" />
                <div className="ml-4">
                    <h1 className='text-2xl font-semibold'>{name}</h1>
                    <p>Price : <span className='text-orange-400'>{price}$</span></p>
                    <p>Quantity : <span className='text-orange-400'>{quantity}</span></p>
                </div>
            </div>
            <div className="product-info flex items-center justify-between">
                <div className="">
                    <button onClick={()=>deleteProduct(id)} className='px-3 py-2 text-[#EB5757] bg-red-200 rounded-[50%]'><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;