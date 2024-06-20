import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cartItems');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return [];
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartItems', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

const initialState = {
    items: loadState()
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.card.info.id === item.card.info.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
            saveState(state.items);
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(i => i.card.info.id === itemId);
            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.items = state.items.filter(i => i.card.info.id !== itemId);
            }
            saveState(state.items);
        },
        clearCart: (state) => {
            state.items = [];
            saveState(state.items);
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
