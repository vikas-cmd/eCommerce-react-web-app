import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list:[],
    wishlist:[]

}
    

 const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            state.list.push(action.payload)
        },
        removeTocart:(state,action)=>{
            console.log('iddd',action.payload.id)
           state.list=state.list.filter(item=>item.id !==action.payload.id)
                 
            
            

        }

    },
})


// Action creators are generated for each case reducer function
export const { addToCart,removeTocart } = cartSlice.actions

export default cartSlice.reducer

