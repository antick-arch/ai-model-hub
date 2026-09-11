import React from 'react';

const Cart = ({ cart, setCart }) => {
    console.log(cart);
    return (
        <div className='container mx-auto space-y-3 p-5'>
            {
                cart.map((item) => (
                    <div className='bg-gray-100 rounded-2xl flex justify-between'>
                        <div className='flex-none'>
                            <img src={item.image} alt={item.title} className='w-30 p-3' />
                        </div>
                        <div className='flex flex-col justify-center flex-1'> 
                            <h2 className='text-xl font-bold'>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                        <div className='flex flex-col justify-center p-3 mx-2'> 
                            <h2 className='text-xl font-bold'>${item.price}</h2>
                            <p>Per Month</p>
                        </div>
                        <div className='flex justify-center items-center p-5'>
                            <button className='btn btn-error'>Remove</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Cart;