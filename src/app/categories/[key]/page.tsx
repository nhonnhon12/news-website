"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PreviewPost from '@/app/components/PreviewPost';

type CategoryData = {
    name: string;
    posts: Post[]
};

type Post = {
    id: number;
    title: string;
    description: string;
    category_ids: string[];
    categories: { id: string; name: string; key: string }[];
    image: string;

}


export default function CategoryPage() {
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [notFound, setNotFound] = useState<boolean>(false);
    const { key } = useParams();

    useEffect(() => {
        if (!key) return;

        async function fetchPost() {
            const response = await fetch(`/api/categories/${key}`);
            if (response.ok) {
                const data: CategoryData = await response.json();
                setPosts(data.posts);
                setName(data.name)
            } else {
                setNotFound(true)
            }
        }

        fetchPost();
    }, [key]);

    if (notFound) {
        return <div className='font-sans text-center text-4xl font-bold mt-8'>Category not found.</div>;
    }
    if (!name) {
        return <div className='font-sans text-center text-4xl font-bold mt-8'>Loading...</div>;
    }
    if (posts) {
        return (
            <div className='font-sans'>
                <h1 className='text-4xl font-bold text-center mt-8'>Category: {name}</h1>
                <hr className='mt-4 mb-12 border-t-2 w-1/6 mx-auto' />
                <div className="grid grid-cols-12 gap-8">
                    {posts.map((post) => (
                        <PreviewPost
                            key={post.id}
                            title={post.title}
                            image={post.image}
                            description={post.description}
                            categories={post.categories}
                            url={"/posts/" + post.id} />
                    ))}
                </div >
            </div>
        )
    }
};