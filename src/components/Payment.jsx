import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";

function Payment() {
  const dispatch = useDispatch();
  const totalCost = useSelector((state) => state.cart.totalCost);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    alert("Payment completed successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="payment-container bg-white p-6 rounded-lg shadow-xl w-full max-w-lg sm:w-4/5 md:w-3/5 lg:w-4/5">
        <div className="flex gap-8 mb-8">
          <label className="font-semibold text-gray-700" htmlFor="cashOption">
            <input
              className="mr-2"
              type="radio"
              name="option"
              id="cashOption"
            />
            Cash on Delivery
          </label>
          <label className="font-semibold text-gray-700" htmlFor="cardOption">
            <input
              className="mr-2"
              type="radio"
              name="option"
              id="cardOption"
              defaultChecked
            />
            Credit Card
          </label>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Payment Details
        </h2>
        <form
          className="flex flex-col gap-6 bg-gradient-to-br from-blue-50 to-blue-200 p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-3">
            <label className="text-gray-600 text-sm">
              Enter your Card Number:
            </label>
            <input
              className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-gray-600 text-sm">
              Enter your Card Expiry:
            </label>
            <input
              className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-gray-600 text-sm">Enter your CVV Number:</label>
            <input
              className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <p className="font-semibold text-lg">
              Total Amount: ${totalCost}
            </p>
          </div>
          <button
            type="submit"
            className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
          >
            Complete Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;