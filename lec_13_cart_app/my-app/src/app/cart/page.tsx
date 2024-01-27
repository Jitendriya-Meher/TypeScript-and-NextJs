"use client";

import React, { useEffect, useState } from 'react'
import styles from "@/styles/cart.module.css"
import Image from 'next/image';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { updateCart } from '@/redux/features/cart-slice';

interface CartItem{
    name: string;
    id:number;
    imagePath:string;
    price:number;
    description:string;
    quantity:number;
}

const page = () => {

    const [cartItem, setCartItems] = useState<CartItem[]> ([]);
    const dispatch = useDispatch<AppDispatch>();
    const cartArray: CartItem[] = useAppSelector((state) => state.cartReducer);

    useEffect(() => {
        setCartItems(cartArray);
    },[cartArray]);

    const incrementCartItem = (index:number) => {
        let tempCartArray = cartArray.map((item,ind) => (
            index===ind ? {...item, quantity:item.quantity+1} : item
        ));

        dispatch(updateCart(tempCartArray));
    }
    const decrementCartItem = (index:number) => {
        let tempCartArray = cartArray.map((item,ind) => (
            index===ind ? {...item, quantity:item.quantity-1} : item
        ));

        dispatch(updateCart(tempCartArray));
    }
    const removeCartItem = (index:number) => {
        let tempCartArray = cartArray.filter((item,ind) => (
            index!==ind
        ));

        dispatch(updateCart(tempCartArray));
    }

  return (
    <div className={styles.cartPage}>
        <h1 className={styles.cartHead}>
            Cart
        </h1>
        {
            cartItem.length == 0 ? (
                <h1 className={styles.emptyCart}>
                    Cart is empty
                </h1>
            ):(
                null
            )
        }

        <div className="">
            {
                cartItem.map((item,index) => (
                    <div className={styles.cartCard} key={index}>
                        <div className={styles.s1}>
                            <Image src={item.imagePath} alt={item.name} width={200} height={200}></Image>
                            <h3>
                                {item.name}
                            </h3>
                        </div>
                        <div className={styles.s1}>
                            <h2>
                                {item.price * item.quantity}
                            </h2>
                            <div className={styles.incredecre}>
                                <button onClick={() => {
                                    decrementCartItem(index);
                                }}>
                                    -
                                </button>

                                <span>{item.quantity}</span>
                                
                                <button onClick={() => {
                                    incrementCartItem(index);
                                }}>
                                    +
                                </button>

                                <svg
                                    onClick={() => {
                                        removeCartItem(index);
                                    }}
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default page