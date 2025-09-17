import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.find(i => i._id === item._id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item._id !== action.payload);
        },
        increment: (state, action) => {
            const item = state.find(item => item._id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.find(item => item._id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        }
    }
});

export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
