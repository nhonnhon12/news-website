import PreviewPost from '@/app/components/PreviewPost';

interface CategoryProps {
    params: {
        category_name: string;
    };
}


const categoryData = {
    'category_name': 'Wordpress',
    'posts': [{
        title: 'Just a Standard Format Post.',
        image: '/posts/1.jpg',
        description: 'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
        categories: ['Design', 'Photography'],
        url: '/posts/1'
    }, {
        title: 'This Is Another Standard Format Post.',
        image: '/posts/2.jpg',
        description: 'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
        categories: ['Design', 'Photography'],
        url: '/posts/2'
    }, {
        title: 'This Is a Audio Format Post.',
        image: '/posts/3.jpg',
        description: 'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
        categories: ['Design', 'Photography'],
        url: '/posts/3'
    }, {
        title: 'Photography Skills Can Improve Your Graphic Design.',
        image: '/posts/4.jpg',
        description: 'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
        categories: ['Design', 'Photography'],
        url: '/posts/4'
    }, {
        title: 'The 10 Golden Rules of Clean Simple Design.',
        image: '/posts/5.jpg',
        description: 'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
        categories: ['Design', 'Photography'],
        url: '/posts/5'
    }, {
        title: 'Workspace Design Trends and Ideas.',
        image: '/posts/6.jpg',
        description: 'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
        categories: ['Design', 'Photography'],
        url: '/posts/6'
    }]
}

const Category = async ({ params }: CategoryProps) => {
    const posts = categoryData.posts
    return (
        <div className='font-sans'>
            <h1 className='text-4xl font-bold text-center mt-8'>Category: {categoryData.category_name}</h1>
            <hr className='mt-4 mb-12 border-t-2 w-1/6 mx-auto' />
            <div className="grid grid-cols-4 gap-8">
                {posts.map((postData, index) => (
                    <PreviewPost
                        key={index}
                        title={postData.title}
                        image={postData.image}
                        description={postData.description}
                        categories={postData.categories}
                        url={postData.url} />
                ))}
            </div >
        </div>
    );
};

export default Category;