import React from "react";

function Search({ searchItem, handleSearch }) {
    return (
        <div className="flex items-center justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <input
                type="search"
                placeholder="Search..."
                className="
                    focus:outline-none 
                    p-2 
                    border-2 
                    rounded 
                    hover:shadow-xl 
                    transition 
                    w-full 
                    max-w-md
                    sm:p-3 
                    md:p-4 
                    lg:p-5
                "
                value={searchItem}
                onChange={handleSearch}
            />
        </div>
    );
}

export default Search;
