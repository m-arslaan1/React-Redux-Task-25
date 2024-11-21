import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalCost: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.totalCost += action.payload.price;
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                state.totalCost += item.price; 
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    state.totalCost -= item.price; 
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload.id); 
                    state.totalCost -= item.price; 
                }
            }
        },

        handleProceedToPayment: (state) => {
            state.items = [];
            state.totalCost = 0;
        },

        handleBackToShop: (state) => {
        },

        clearCart: (state) => {
            state.items = [];
            state.totalCost = 0;
        },
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity, handleProceedToPayment, handleBackToShop, clearCart } = cartSlice.actions;
export default cartSlice.reducer;