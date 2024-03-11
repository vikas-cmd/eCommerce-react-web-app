import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
//import { setProductData, viewProduct } from '../redux/productSlice';
import { Link, Navigate } from 'react-router-dom';

const Product = ({ ...props }) => {
    const { price, title, discountPercentage, id,images,description } = props;
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(addToCart({

            price, 
            title,
             discountPercentage, 
              id,
              images,
              description
           
        }))

    }
  /* const handleClickOnProduct=()=>{
        dispatch(viewProduct({
            id: id,
            price,
            title,
            discountPercentage,
            images,
            description
        }
           
        ))
        dispatch(setProductData(true))
        console.log('hiiiiiiii')
        
    }*/
    return <>
    
<div className='flex  flex-col justify-center items-start' >
    <Link to={`/singleproduct/${props.id}`}>
        <div className=' w-14 h-5 mb-2 bg-green-100 border rounded-sm border-lime-500 text-lime-600 text-xs ' >{Math.floor(props.discountPercentage)}% OFF</div>
        <img width={120} className='  ml-3 object-fill h-[105px]' src={props.images[0]} />
        <p >{props.title}</p>

        <div>
            <small>₹</small>
            <strong>{Math.floor(props.price - (props.price * props.discountPercentage / 100))}</strong>
            <small> ₹</small>
            <span className='line-through'>{props.price}</span>

        </div>
        </Link>
        <div>
            <button className=' w-28 rounded-full border text-red-500 border-red-600 font-mono text-sm mb-1  ' onClick={handleClick}>Add To Cart</button>
            <button className='bg-lime-500 w-40 rounded-sm cursor-pointer'>Checkout</button>

        </div>
        


</div>

    </>;
}


export default Product;