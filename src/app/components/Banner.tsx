import Image from 'next/image'

interface BannerProps {
    title: string;
    url: string;
    background: string;
    author: string;
    date: string;
}

export default function Banner({ title, url, background, author, date }: BannerProps) {
    return (
        <div className="col-span-6 relative bg-gray-200 shadow overflow-hidden">
            <Image
                src={background}
                fill
                alt={title}
                sizes='100vw'
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center content-center p-4 text-white font-sans">
                <p className="text-sm text-center mb-2 text-slate-300">{date} - {author}</p>
                <p className="text-5xl font-bold text-center px-16">{title}</p>
            </div>
        </div>
    );
}

