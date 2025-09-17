import Search from "../components/Search";
import Card from "../components/Card";
import { useEffect, useState } from "react";

function Home() {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchItem, setSearchItem] = useState("");

    const handleSearch = e => {
        const inputData = e.target.value.toLowerCase();
        setSearchItem(inputData);
    };

    async function getData() {
        try {
            const response = await fetch("http://localhost:4000/menu");
            const data = await response.json();
            setMenu(data); 
            setLoading(false);
        } catch (err) {
            console.error("Error:", err);
            }
    }

    useEffect(() => {
        getData();
    }, []);

    // Filter menu items 
    const filteredMenu = menu.filter(item =>
        item.name.toLowerCase().includes(searchItem)
    );

    return (
        <div className="p-4">
            <Search searchItem={searchItem} handleSearch={handleSearch} />
            <div className="mt-6">
                {loading ? (
                    <div className="text-center">
                        <p>Loading...</p> 
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredMenu.map(item => {
                            return <Card key={item.id} item={item} />;
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
