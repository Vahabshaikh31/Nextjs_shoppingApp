"use client";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { removeFromCart } from "@/store/slice/cart-slice";

export const Carts = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const cart = useSelector((state) => state.cart?.items);
  const dispatch = useDispatch();

  useEffect(() => {
    // Calculate total amount
    if (cart.length) {
      setTotalAmount(cart.reduce((acc, curr) => acc + curr?.price, 0));
    } else {
      setTotalAmount(0); // Reset if cart is empty
    }
  }, [cart]);

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Cart</h2>
        {!cart.length ? (
          <h1 className="text-4xl font-bold flex items-center justify-center mt-10">
            Cart Is Empty.
          </h1>
        ) : (
          <>
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full border-collapse divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-700"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-700"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-700"
                    >
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cart?.map((item) => (
                    <tr key={item.id}>
                      <td className="py-5 px-4">
                        <div className="flex items-center gap-6">
                          <div className="h-36 w-36 shrink-0 bg-gray-100">
                            <img
                              src={item?.thumbnail}
                              alt={item?.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <p className="text-lg font-medium text-gray-800">
                            {item?.title}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-lg text-gray-700">${item.price}</p>
                      </td>
                      <td className="px-6 py-4">
                        <Button
                          onClick={() => handleDelete(item?.id)}
                          className="text-red-600"
                        >
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-right">
              <h3 className="text-2xl font-semibold text-gray-800">
                Total Amount: ${totalAmount.toFixed(2)}
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
