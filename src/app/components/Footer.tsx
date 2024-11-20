import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (

        <footer className="flex justify-center content-center py-8 px-4 md:px-24 text-gray-800 font-sans">
            <div className="max-w-sm me-10">
                <b>About Our Site</b>
                <hr className="my-3" />
                <span className="text-gray-500">Lorem ipsum Ut velit dolor Ut labore id fugiat in ut fugiat nostrud qui in dolore commodo eu magna Duis cillum dolor officia esse mollit proident Excepteur exercitation nulla. Lorem ipsum In reprehenderit commodo aliqua irure labore.</span>
            </div>
            <div className="me-10">
                <b>Site Links</b>
                <hr className="my-3" />
                <div className="text-gray-500 flex flex-col">
                    <a href="/">About Us</a>
                    <a href="/">Blog</a>
                    <a href="/">FAQ</a>
                    <a href="/">Terms</a>
                    <a href="/">Privacy Policy</a>
                </div>
            </div>
            <div className="me-10">
                <b>Social</b>
                <hr className="my-3" />
                <div className="text-gray-500 flex flex-col">
                    <a href="/">Twitter</a>
                    <a href="/">Facebook</a>
                    <a href="/">Dribbble</a>
                    <a href="/">Google+</a>
                    <a href="/">Instagram</a>
                </div>
            </div>
            <div>
                <b>Subscribe</b>
                <hr className="my-3" />
                <div className="text-gray-500 flex flex-col">
                    <span>Keep yourself updated. Subscribe to our newsletter.</span>
                    <input type="email" name="email" className='mt-3 block w-full placeholder-slate-400 focus:placeholder-slate-600 focus:text-slate-100 bg-neutral-300 focus:bg-neutral-900 focus:outline-none p-3' placeholder="you@example.com" />
                </div>
            </div>
        </footer>
    );
}