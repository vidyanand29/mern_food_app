import React from "react";

const Footer = () => {
    return (
        <footer className="text-sm mt-10 border-t-2 py-6 px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="mb-4 sm:mb-0">
                    <span className="font-bold text-lg text-red-600">
                        GoodFood
                    </span>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                    <p className="hover:text-red-600 transition">About</p>
                    <p className="hover:text-red-600 transition">Contact</p>
                    <p className="hover:text-red-600 transition">Privacy</p>
                </div>
                
                <div className="mt-4 sm:mt-0 text-xs text-gray-500 text-center sm:text-right">
                    © {new Date().getFullYear()} GoodFood. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
