import React from 'react';
import axios from 'axios'
const Home = () => {

    const pay = async () => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/bkash/payment/create', { amount: 1, orderId: 1 }, { withCredentials: true })
            window.location.href = data.bkashURL
            console.log("data",data);
        } catch (error) {
            console.log(error.response.data)
        }
    }
    return (
        <div className="flex flex-1 justify-center items-center h-svh">
            <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                        alt=""
                        className="h-64 w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>

                <div className="py-5 text-start">

                    <span className="block text-sm ml-4 font-semibold text-gray-600 dark:text-white">Test Product</span>
                    <span className="block text-sm mt-4 ml-4 font-semibold text-gray-600 dark:text-white">Test Price 1 TK</span>
                    <button className="bg-black text-white ml-4 mt-4 w-2/4 h-10 border rounded-lg border-black " onClick={pay}>Pay with Bkash </button>
                </div>
            </div>
        </div>
    );
};

export default Home;