import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { RootState } from "./store"
import { cartActions } from "./cartSlice"
import { bindActionCreators } from "@reduxjs/toolkit"


// useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// useDispatch 
const actions = {
    ...cartActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}