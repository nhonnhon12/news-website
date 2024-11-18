import Banner from "./components/Banner";
import PreviewPost from "./components/PreviewPost";


export default function Home() {
  const bannerData = {
    'title': 'Enhancing Your Designs with Negative Space',
    'url': '/',
    'background': '/banners/1.jpg',
    'author': 'Naruto Uzumaki',
    'date': 'September 06, 2016'
  };
  const postDatas = [{
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
  }
  ];
  return (
    <div className="grid grid-cols-4 gap-8">
      <Banner
        title={bannerData.title}
        url={bannerData.url}
        background={bannerData.background}
        author={bannerData.author}
        date={bannerData.date} />
      {postDatas.map((postData, index) => (
        <PreviewPost
          key={index}
          title={postData.title}
          image={postData.image}
          description={postData.description}
          categories={postData.categories}
          url={postData.url} />
      ))}
    </div >
  );
}
