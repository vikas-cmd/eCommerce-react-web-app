
import { useDispatch } from "react-redux"
import { removeTocart } from "../redux/cartSlice"

const Cart = ({...props}) => {
    const dispatch=useDispatch()
    const handleRemoveBtn=()=>{
        console.log("iiiddd",props.id)
dispatch(removeTocart({
    id:props.id,
}))

    }
    console.log("cartdata",props)
    return (
        
            
            <div className="flex flex-col gap-1 border border-gray-50">
                <div className="border rounded-lg flex justify-between items-center gap-4">
                    <div className="flex  items-center gap-4">
                        <img 
                            alt="Thumbnail"
                            className="rounded-lg h-[100px]  "
                            width={100}
                            src={props.images[0]}
                            style={{
                                aspectRatio: "100/100",
                                objectFit: "fill",
                            }}
                            
                        />
                        <div className="grid gap-1">
                            <h3 className="font-semibold">{props.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400">Rs. {props.price}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <input className="w-20   outline-slate-500" defaultValue="1" type="number" />
                        <button className="px-3 py-1 bg-orange-600 rounded " onClick={handleRemoveBtn}>Remove</button>
                    </div>
            
                </div>
                
            </div>
            
            
            
        
    )
}

export default Cart;