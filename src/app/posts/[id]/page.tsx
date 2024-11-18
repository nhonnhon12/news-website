"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Category = {
    name: string;
    url: string;
};

type Post = {
    id: number;
    title: string;
    date: string;
    categories: Category[];
    image: string;
    content: string;
    description: string;
};

export default function PostPage() {
    const [post, setPost] = useState<Post | null>(null);
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;

        async function fetchPost() {
            const response = await fetch(`/api/posts?id=${id}`);
            if (response.ok) {
                const data: Post = await response.json();
                setPost(data);
            } else {
                console.log('Post not found');
            }
        }

        fetchPost();
    }, [id]);

    if (!post) {
        return <div className='text-center'>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-6 font-sans">
            <img src={post.image} alt={post.title} className="w-full max-h-[400px] object-cover" />
            <div className='px-8 py-16'><h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
                <p className="text-sm mb-4">
                    <span className='me-4 text-gray-400'>{post.date}</span>
                    {post.categories.map((category, index) => (
                        <span key={index}>
                            <a href={category.url} className="hover:underline text-gray-800 mr-1">{category.name}</a>
                        </span>
                    ))}
                </p>
                <div className="text-gray-700">
                    <p>{post?.content || post.description}</p>
                </div>
            </div>
        </div>
    );
};