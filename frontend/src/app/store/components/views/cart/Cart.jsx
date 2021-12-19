import React, { useRef } from 'react'
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons"
import useOnClickOutside from "clickout"

import {
    Wrapper,
    Icon,
    CartCount,
    CartSideBar,
    EmptyCart,
    SideBarHeader,
    Card,
    CardBody,
    CardImage,
    CardTitle,
    CardRemove,
    CardRow,
    ClearButton,
} from "./styles";

export default function Cart(props) {

    const $sideBarRef = useRef()
    useOnClickOutside($sideBarRef, () => props.setToggle(false))

    return (
        <>
            <Wrapper onClick={() => props.setToggle(true)}>
                {<Icon icon={faShoppingCart} />}
                <CartCount>{props.carts.length}</CartCount>
            </Wrapper>

            <CartSideBar ref={$sideBarRef} className={props.isToggle ? "expand" : "shrink"}>
                <SideBarHeader>shopping cart</SideBarHeader>
                {props.carts.length === 0 ? (
                    <EmptyCart>Empty Cart</EmptyCart>
                ) : (
                    props.carts.map(({ product, quantity }) => (
                        <Card key={product.id}>
                            <CardImage src={product.imageURL} />
                            <CardBody>
                                <CardRow>
                                    <CardTitle>{props.products.name}</CardTitle>
                                    <CardRemove
                                        icon={faTimes}
                                        onClick={() => props.removeProductFromCart(props.products.id)}
                                    />
                                </CardRow>
                                <CardRow>
                                    <CardTitle>
                                        Total Quantity ({quantity}) - ${props.products.price * quantity}
                                    </CardTitle>
                                </CardRow>
                            </CardBody>
                        </Card>
                    ))
                )}
                {props.carts.length !== 0 && (
                    <ClearButton onClick={() => props.clearCart()}>Checkout</ClearButton>
                )}
            </CartSideBar>
        </>
    )
}