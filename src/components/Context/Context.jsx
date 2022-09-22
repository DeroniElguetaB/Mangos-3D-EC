import React from "react";
import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext ()

const Provider = ({children}) => {

    const [cart, SetCart] = useState ([])

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)){
            let producto = cart.find(prod => prod.id === item.id)
            cart[cart.indexOf(producto)].cantidad += cantidad 
            SetCart([...cart])
        }
        else {
            SetCart([...cart, {...item, cantidad: cantidad}])
        }
    }

    const clear = () => {
        SetCart([])
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.cantidad, 0)
    }

    return(
        <CartContext.Provider value={{cart, addItem, clear, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider