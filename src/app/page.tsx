"use client"

import { useEffect, useState } from 'react';
import PreviewPost from '@/app/components/PreviewPost';
import Banner from './components/Banner';

const bannerData = {
  'title': 'Photography Skills Can Improve Your Graphic Design.',
  'post': '8',
  'background': '/posts/8.jpg',
  'author': 'Naruto Uzumaki',
  'date': 'September 06, 2016'
};

type Post = {
  id: number;
  title: string;
  description: string;
  category_ids: string[];
  categories: { id: string; name: string; key: string }[];
  image: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch('/api/posts');
      if (response.ok) {
        const posts: Post[] = await response.json();
        setPosts(posts);
      }
    }

    fetchPost();
  }, []);

  if (!posts) {
    return <div className='font-sans text-center text-4xl font-bold mt-8'>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-12 gap-8">
      <Banner
        title={bannerData.title}
        post={bannerData.post}
        background={bannerData.background}
        author={bannerData.author}
        date={bannerData.date} />
      {posts.map((post, index) => (
        <PreviewPost
          key={post.id}
          title={post.title}
          image={post.image}
          description={post.description}
          categories={post.categories}
          url={"/posts/" + post.id} />
      ))}
    </div >
  );
}
