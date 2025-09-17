import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Form() {
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true); 


        const orderData = {
            name,
            address,
            contact,
            orders: cart.map(item => ({
                menuItem: item._id,
                qty: item.quantity
            }))
        };

        try {
            const res = await fetch("http://localhost:4000/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderData)
            });
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.error.message);
                setIsLoading(false); 
                return;
            }
            localStorage.setItem("order", JSON.stringify(data)); 
            navigate("/success");
            toast.success("Order placed successfully!");


            setName("");
            setAddress("");
            setContact("");
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong. Try again.");
            setIsLoading(false);  
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg mt-10"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Place Your Order
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-600"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        placeholder="Enter your name"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-600"
                    >
                        Address
                    </label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        required
                        placeholder="Enter your address"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="contact"
                        className="block text-sm font-medium text-gray-600"
                    >
                        Contact
                    </label>
                    <input
                        type="tel"
                        id="contact"
                        value={contact}
                        onChange={e => setContact(e.target.value)}
                        required
                        placeholder="Enter your contact number"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
                    />
                </div>

                <button
                    type="submit"
                    className={`w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg ${isLoading ? 'cursor-not-allowed opacity-50' : 'hover:bg-indigo-700'}`}
                    disabled={isLoading}  
                >
                    {isLoading ? (
                        <span>Loading...</span> 
                    ) : (
                        "Place Order"
                    )}
                </button>
            </form>
        </div>
    );
}

export default Form;
