"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { addToCart, removeFromCart } from "@/store/slice/cart-slice";

export function AddToCartButton({ productItem }) {
  const cartItems = useSelector((state) => state.cart.items); 
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(productItem));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(productItem?.id));
  };

  return (
    <div className="mt-8 max-w-md">
      <Button
        type="button"
        onClick={
          cartItems.some((item) => item.id === productItem.id)
            ? handleRemoveFromCart
            : handleAddToCart
        }
      >
        {cartItems.some((item) => item.id === productItem.id)
          ? "Remove from cart"
          : "Add to cart"}
      </Button>
    </div>
  );
}
