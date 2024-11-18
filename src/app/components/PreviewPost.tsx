import Image from "next/image";
import Link from "next/link";

interface PostProps {
  title: string;
  image: string;
  description: string;
  categories: string[];
  url: string
}

export default function PreviewPost({ title, image, description, categories, url }: PostProps) {
  return (
    <div className="flex flex-col col-span-1 bg-white shadow overflow-hidden font-sans">
      <Link href={url}>
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="mx-4 mb-4">
          <p className="text-gray-800 text-sm my-3">{categories.join(", ")}</p>
          <p className="text-xl text-gray-800 font-bold">{title}</p>
          <p className="text-gray-400 text-sm mt-2">{description}</p>
        </div>
      </Link>
    </div>
  );
}