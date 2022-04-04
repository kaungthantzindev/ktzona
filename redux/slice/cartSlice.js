import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeCart: (state, action) => {
            const indexId = state.items.findIndex((item) => item.id === action.payload.id)
            let newItem = [...state.items]
            if (indexId >= 0) {
                newItem.splice(indexId, 1)
            } else {
                console.log('error')
            }
            state.items = newItem;
        },
        removeAll: (state) => {
            state.items = [];
        }
    }
})

export const { addCart, removeCart, removeAll } = cartSlice.actions;

export const seletedItems = (state) => state.cart.items;

export const selectTotal = (state) => state.cart.items.reduce((total, item) => total + parseFloat(item.price), 0)

export default cartSlice.reducer;