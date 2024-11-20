import { NextResponse } from 'next/server';
import { posts } from '@/data/posts';
import { categories } from '@/data/categories';

export async function GET() {
    const postsWithCategories = posts
        .map((post) => ({
            ...post,
            categories: post.category_ids.map((catId) =>
                categories.find((cat) => cat.id === catId)
            ).filter(Boolean).map((cat) => ({
                id: cat?.id,
                name: cat?.name,
                key: cat?.key,
            })),
        }));

    return NextResponse.json(postsWithCategories);
}