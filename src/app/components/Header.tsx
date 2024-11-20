"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Categories = {
    id: string;
    name: string;
    key: string
}

export default function Header() {
    const [categories, setCategories] = useState<Categories[] | null>(null);

    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch('/api/categories');
            if (response.ok) {
                const categories: Categories[] = await response.json();
                setCategories(categories);
            }
        }
        fetchCategories();
    }, []);

    return (
        <header className="flex bg-escheresque justify-between content-center py-8 px-4 md:px-24 xl:px-56 text-gray-800">
            <Link href="/" className="me-5">
                <Image src="/logo.png" alt="Logo" width={60} height={60}
                />
            </Link>
            <div className="flex justify-between content-center items-center font-sans font-bold">
                <Link href="/" className="my-auto mx-4 hover:underline">Home</Link>
                <div className="relative group flex items-center mx-4 h-full">
                    <Link href="#" className="hover:underline">
                        Categories
                    </Link>
                    <ul className="absolute left-0 top-2/3 hidden mt-2 space-y-2 text-gray-600 bg-white shadow-lg w-auto group-hover:block font-normal text-sm z-50">
                        {categories && categories.map((category, index) => (
                            <li>
                                <Link href={"/categories/" + category.key} className="block px-4 py-2 hover:bg-neutral-100">
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link href="#" className="my-auto mx-4 hover:underline">Blog</Link>
                <Link href="#" className="my-auto mx-4 hover:underline">Styles</Link>
                <Link href="/contact" className="my-auto mx-4 hover:underline">Contact</Link>
                <Link href="#" className="my-auto ms-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" />
                    </svg>
                </Link>
            </div>
        </header>
    );
}