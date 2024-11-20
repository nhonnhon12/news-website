import { NextResponse } from 'next/server';
import { posts } from '@/data/posts';
import { categories } from '@/data/categories';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const postId = parseInt(params.id, 10);
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const postWithCategories = {
        ...post,
        categories: post.category_ids.map((catId) =>
            categories.find((category) => category.id === catId)
        ).filter(Boolean).map((cat) => ({
            id: cat?.id,
            name: cat?.name,
            key: cat?.key,
        })),
    };
    return NextResponse.json(postWithCategories);
}