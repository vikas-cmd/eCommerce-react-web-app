import { createSlice } from "@reduxjs/toolkit";
const initialState={
    singleData:null,
    isClickedkProduct:false
}
;
const productSlice=createSlice({
    name:'product_details',
    initialState,
    reducers:{
        setSingleProduct:(state,action)=>{
            state.singleData=action.payload;

        },
        setProductData:(state,action)=>{
            state.isClickedkProduct=action.payload;
        }

    }
});

export const {setSingleProduct,setProductData}=productSlice.actions;
export default productSlice.reducer;