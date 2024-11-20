import Image from "next/image";
import Link from "next/link";

interface PostProps {
  title: string;
  image: string;
  description: string;
  categories: { id: string; name: string; key: string }[];
  url: string
}

export default function PreviewPost({ title, image, description, categories, url }: PostProps) {
  return (
    <div className="flex flex-col col-span-3 bg-white shadow overflow-hidden font-sans">
      <Link href={url}>
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="mx-4 mb-4">
        <p className="text-gray-800 text-sm my-3">{categories.map((category, index) => (
          <Link href={"/categories/" + category.key} key={category.id}>
            {category.name}
            {index < categories.length - 1 && ', '}
          </Link>
        ))}</p>
        <Link href={url}>
          <p className="text-xl text-gray-800 font-bold">{title}</p>
        </Link>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}