import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../features/cartSlice";

function Cart({ onProceedToPayment, onBackToShopping }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const totalCost = useSelector((state) => state.cart.totalCost);

  const location = useLocation();
  const isPaymentPage = location.pathname === "/payment";

  return (
    <div className="cart max-h-[80vh] overflow-hidden p-4 border-y-8">
      <h2 className="text-2xl font-semibold mb-4 lg:text-center sm:text-left">
        My Cart
      </h2>
      <hr />

      {cart.length === 0 ? (
        <p className="text-center">
          <i>Your cart is empty</i>
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-4 mb-5 h-[100%] overflow-auto mt-5">
          {cart.map((shoe) => (
            <li
              className="rounded shadow-lg p-3 border-1 w-full flex flex-col sm:flex-row sm:gap-5 sm:items-center"
              key={shoe.id}
            >
              <img
                className="lg:w-[60px] lg:h-[40px] sm:w-[100px] sm:h-[70px] object-contain hover:scale-110 duration-300 mb-3 sm:mb-0"
                src={shoe.image}
                alt={shoe.name}
              />
              <div className="w-full">
                <span className="text-sm sm:text-base font-medium">
                  {shoe.name}
                </span>
                <div className="flex justify-between sm:w-full mt-2 sm:mt-0">
                  <span className="text-sm font-semibold text-gray-700">
                    ${shoe.price}
                  </span>
                  <div className="flex gap-2">
                    <button
                      className="py-0 px-3 rounded-md bg-blue-600 hover:bg-blue-700"
                      onClick={() => dispatch(decreaseQuantity(shoe))}
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold">
                      {shoe.quantity}
                    </span>
                    <button
                      className="py-0 px-3 rounded-md bg-blue-600 hover:bg-blue-700"
                      onClick={() => dispatch(increaseQuantity(shoe))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="sticky bottom-0 flex flex-col justify-center lg:items-center sm:items-start sm:flex-row sm:gap-5 border-t-2 pt-4 mt-5">
        <p className="text-center text-lg font-bold px-3 py-1 border-2 rounded-lg text-blue-600 mb-4 sm:mb-0">
          Total: ${totalCost}
        </p>

        {isPaymentPage ? (
          <Link to="/">
            <button
              className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
              onClick={onBackToShopping}
            >
              Go Back to Shopping
            </button>
          </Link>
        ) : (
          <Link to="/payment">
            <button
              className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
              onClick={onProceedToPayment}
            >
              Proceed to Payment
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Cart;