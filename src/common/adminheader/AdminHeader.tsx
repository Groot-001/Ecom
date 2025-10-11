"use client";
import React, { useState } from "react";
import { Search, X } from "lucide-react";

interface IProps {
    title?: string;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    isCategoryOpen: boolean;
    setIsCategoryOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminHeader: React.FC<IProps> = ({ title = 'title', query, setQuery, isCategoryOpen, setIsCategoryOpen }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="w-full bg-white shadow-md rounded-2xl px-6 py-4 mb-2 flex items-center justify-between transition-all duration-300">
            {/* Left Section */}
            <h1 className="text-2xl font-semibold text-gray-800">
                {title}
            </h1>

            {/* Right Section */}
            <div className="relative flex items-center">
                {/* Add Category Section */}
                <button
                    className="bg-blue-400 border border-gray-200 rounded-full p-3 text-white"
                    onClick={() => setIsCategoryOpen(true)}>
                    Add Category
                </button>

                {/* Search Button / Bar */}
                <div
                    className={`flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full p-3 transition-all duration-300 ease-in-out ${isSearchOpen ? "w-64 shadow-sm" : "w-20 justify-center"
                        }`}
                >
                    <Search
                        size={18}
                        className="text-gray-600 cursor-pointer"
                        onClick={() => setIsSearchOpen(true)}
                    />
                    {isSearchOpen && (
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search categories..."
                            className="bg-transparent outline-none text-sm w-full text-gray-700"
                            autoFocus
                        />
                    )}
                </div>

                {/* Close Button */}
                {isSearchOpen && (
                    <button
                        onClick={() => {
                            setIsSearchOpen(false);
                            setQuery("");
                        }}

                        className="ml-2 p-2 text-gray-500 hover:text-gray-700"
                    >
                        <X size={18} />
                    </button>
                )}

            </div>
        </div>
    );
}

export default AdminHeader
