import { NextResponse } from 'next/server';
import { posts } from '@/data/posts';
import { categories } from '@/data/categories';

export async function GET(req: Request, { params }: { params: { key: string } }) {
    const { key } = params;

    const category = categories.find((c) => c.key === key);
    if (!category) {
        return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }
    const categoryName = category?.name

    const filteredPosts = posts
        .filter((post) => post.category_ids.includes(category.id))
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

    const response = {
        name: categoryName,
        posts: filteredPosts
    }

    return NextResponse.json(response);
}