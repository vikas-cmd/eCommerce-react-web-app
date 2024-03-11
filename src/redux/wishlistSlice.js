import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wishlist:[]
}
    

const Slice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addToWishList: (state, action) => {

            state.push(action.payload)
        },
        removeToWishList:(state,action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!==action.payload.id);
        }

    },
})

// Action creators are generated for each case reducer function


export const {addToWishList,removeToWishList}=Slice.actions;
export default Slice.reducer;