import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CartList = () => {
    const navigate=useNavigate()
    const {list} = useSelector(state => state.cart)
    console.log('cartlist', list.length)
    useEffect(()=>{
        if(list.length===0){
            navigate('/')
        }
    },[])
    return <>
    <h1>CartList</h1>
    <div className=" w-full flex justify-between border rounded-lg p-4">
            
{list !==0 &&
        

        <div className="flex flex-col w-[60%] gap-2">
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">Cart</h2>
                <p>Your items are waiting for you</p>
                
            </div>
            {list.map(item =>( 
                
                    <div key={item.id}><Cart {...item}/></div>
                )
            )

            }
        </div>
}
<div className="w-[30%] mt-32 flex flex-col gap-1 text-sm">
                <div className="flex items-center gap-2">
                    <div>Subtotal</div>
                    <div className="ml-auto">$227.00</div>
                </div>
                <div className="flex items-center gap-2">
                    <div>Shipping</div>
                    <div className="ml-auto">$5.00</div>
                </div>
                <div className="flex items-center font-medium gap-2">
                    <div>Total</div>
                    <div className="ml-auto">$232.00</div>
                </div>
                <button className="w-full bg-gray-200 rounded py-2">Checkout</button>
            </div>
            </div>
    </>

}
export default CartList;