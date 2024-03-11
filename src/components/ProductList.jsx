import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const ProductList = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,         // Enable autoplay
    autoplaySpeed: 2000
      };
    const [data, setData] = useState([])
    const Api = async () => {

        const ApiData = await axios.get('https://dummyjson.com/products')

        setData(ApiData.data.products)
    }
    useEffect(() => {
        Api();
    }, [])
    console.log("data",data)
    return <>
        <div className='flex bg-gray-50 justify-center p-4 items-center w-full gap-3 flex-wrap mt-4'>
            {data.map((item) => (

                <div key={item.id} className='flex bg-white z-[1] pl-5 justify-center items-center w-[18%] h-[280px] border rounded-lg'>




                    <Product {...item} />

                </div>

            )
            )
            }
            <div className='w-[60%] m-4 h-auto '>
        <Slider {...settings}>
        
            {data.map((item)=>(
            <div key={item.id} className='  border  border-red-500  rounded-sm'>




               <Product {...item} />

            </div>

            )
            )
            

            }
        
       </Slider>
       </div>
        </div>
        
    </>;
}


export default ProductList;