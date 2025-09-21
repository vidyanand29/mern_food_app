import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector(state => state.cart);
    return (
        <nav className="flex justify-between items-center border-b-2 py-2 px-4 sm:px-6 md:px-8 sticky top-0 bg-white">

            <h1 className="font-bold text-lg text-green-600">Meal</h1>


            <div className="space-x-4 sm:space-x-6 flex flex-wrap justify-end sm:justify-start mt-2 sm:mt-0">
                <Link
                    to="/"
                    className="hover:text-red-600 transition text-sm sm:text-base"
                >
                    Home
                </Link>
                <Link
                    to="/cart"
                    className="hover:text-red-600 transition text-sm sm:text-base"
                >
                    Cart
                    <sup className="font-bold text-red-600">{cart.length}</sup>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
