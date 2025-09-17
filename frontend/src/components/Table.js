import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeFromCart } from "../redux/cartSlice";

function Table() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="overflow-x-auto">
            <h1 className="text-2xl font-semibold mb-6 text-center sm:text-left">
                Your Cart
            </h1>
            <table className="min-w-full table-auto border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                            Item
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                            Quantity
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                            Price
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item._id} className="border-t">
                            <td className="px-4 py-2 text-sm">{item.name}</td>
                            <td className="px-4 py-2 text-sm">
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() =>
                                            dispatch(decrement(item._id))
                                        }
                                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() =>
                                            dispatch(increment(item._id))
                                        }
                                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td className="px-4 py-2 text-sm">
                                ₹{(item.price * item.quantity).toFixed(2)}
                            </td>
                            <td className="px-4 py-2 text-sm">
                                <button
                                    onClick={() =>
                                        dispatch(removeFromCart(item._id))
                                    }
                                    className="text-red-500 hover:text-red-700 transition"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1 className="font-bold text-green-500 mt-4">
                Total price: ₹{totalPrice.toFixed(2)}
            </h1>
        </div>
    );
}

export default Table;
