import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IBook } from "../project_data/IBook"

interface ICart {
    cart: IBook[]
}

const initialState: ICart = {
    cart : JSON.parse( localStorage.getItem('cart') ?? '[]')
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IBook>) => {
            state.cart.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    }
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer