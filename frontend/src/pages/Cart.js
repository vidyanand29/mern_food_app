import Table from "../components/Table";
import Form from "../components/Form";
import { useSelector } from "react-redux";

function Cart() {
    const cart = useSelector(state => state.cart);

    return (
        <div className="p-4">
            {cart.length === 0 ? (
                <h1 className="text-2xl font-semibold mb-6 text-center sm:text-left">
                    Your Cart is Empty!
                </h1>
            ) : (
                <div className="flex flex-col sm:flex-row gap-8">
                    <div className="flex-1">
                        <Table />
                    </div>
                    <div className="flex-1">
                        <Form />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
