import React from "react";

function Success() {
    const order = JSON.parse(localStorage.getItem("order"));
    
    if (!order) return <p>No order found.</p>;

    const { name, address, contact, orders, totalAmount, date } = order;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Order Receipt</h1>

            <div className="mb-6">
                <p><strong>Customer Name:</strong> {name}</p>
                <p><strong>Address:</strong> {address}</p>
                <p><strong>Contact:</strong> {contact}</p>
                <p><strong>Order Date:</strong> {new Date(date).toLocaleString()}</p>
            </div>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full table-auto text-sm">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="py-3 px-4 text-left">Item</th>
                            <th className="py-3 px-4 text-left">Price</th>
                            <th className="py-3 px-4 text-left">Quantity</th>
                            <th className="py-3 px-4 text-left">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((orderItem) => {
                            const { menuItem, qty } = orderItem;
                            const itemTotal = menuItem.price * qty;
                            return (
                                <tr key={orderItem._id} className="border-b">
                                    <td className="py-3 px-4">{menuItem.name}</td>
                                    <td className="py-3 px-4">{menuItem.price} ₹</td>
                                    <td className="py-3 px-4">{qty}</td>
                                    <td className="py-3 px-4">{itemTotal} ₹</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="mt-6 flex justify-between">
                <h2 className="text-xl font-medium">Total Amount</h2>
                <p className="text-xl font-bold text-green-500">{totalAmount} ₹</p>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">
                <p className="font-semibold">
                    <span className="text-lg">Please take a screenshot for confirmation during delivery.</span>
                </p>
                <p>Thank you for choosing us! We hope you enjoy your meal. Visit us again for more amazing dishes!</p>
            </div>
        </div>
    );
}

export default Success;
