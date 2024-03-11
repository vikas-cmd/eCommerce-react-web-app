import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setSingleProduct } from "../redux/productSlice";

//const baseUrl = 'https://dummyjson.com/products/'

const SingleProduct = () => {
  const {singleData}=useSelector(state => state.product_details)
  console.log('single',singleData) // to get the global state in order to access the product data
  const dispatch=useDispatch()
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id} `).then((response) => {
      console.log('Single Product', response.data);
      dispatch(setSingleProduct(response.data));
      console.log('Single Product', response);
    }).then( (error)=>{console.log("Error", error)})
  },[id,dispatch] );
    
    console.log("h88888", singleData)
    

    return <>

{singleData && 
      

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">

            <div className="bg-gray-200 max-w-[450px] p-4 rounded flex justify-center items-center">
              <img src={singleData.images[0]} alt={singleData.title} className=" h-[400px]  object-fill rounded" />
            </div>

            <div className="bg-white p-4 rounded ">
              <h1 className="text-xl font-bold mb-2">{singleData.title}</h1>
              <p>{singleData.description}</p>
              <p className="text-gray-500 mb-4"></p>
              <p className="text-xl font-bold mb-4">Rs.{Math.floor(singleData.price - (singleData.price * singleData.discountPercentage / 100))} ( {Math.floor(singleData.discountPercentage)} % Off )</p>

              <div className="mb-4">
                <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity:1</label>
                {/* <input type="number" id="quantity" name="quantity" min="1" className="w-full p-2 border border-gray-300 rounded" />
       */}

              </div>


              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
              
            </div>
          </div>
        </div>
}
    </>;
  }

export default SingleProduct;