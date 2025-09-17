import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function FoodCard({ item }) {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-48 object-cover"
            />

            <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                        {item.name}
                    </h2>
                    <p className="text-md font-semibold text-green-600 mt-2">
                        ₹{item.price}
                    </p>
                </div>

                <button
                    onClick={() => dispatch(addToCart(item))}
                    className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default FoodCard;
