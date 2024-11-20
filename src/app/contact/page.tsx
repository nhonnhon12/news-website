'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Submitting...');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', website: '', message: '' });
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            setStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 font-sans">
            <h1 className="text-3xl font-bold mb-4 font-bold">Get In Touch With Us.</h1>
            <p className='text-lg mb-4'>Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna occaecat Excepteur nisi esse veniam dolor consectetur minim qui nisi esse deserunt commodo ea enim ullamco non voluptate consectetur minim aliquip Ut incididunt amet ut cupidatat.</p>
            <p className='mb-6'>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Your Name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full placeholder-slate-400 focus:placeholder-slate-600 focus:text-slate-100 bg-neutral-300 focus:bg-neutral-900 focus:outline-none p-3"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Your Email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full placeholder-slate-400 focus:placeholder-slate-600 focus:text-slate-100 bg-neutral-300 focus:bg-neutral-900 focus:outline-none p-3"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        id="website"
                        name="website"
                        placeholder='Your Website'
                        value={formData.website}
                        onChange={handleChange}
                        className="mt-1 block w-full placeholder-slate-400 focus:placeholder-slate-600 focus:text-slate-100 bg-neutral-300 focus:bg-neutral-900 focus:outline-none p-3"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Your Message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full placeholder-slate-400 focus:placeholder-slate-600 focus:text-slate-100 bg-neutral-300 focus:bg-neutral-900 focus:outline-none p-3"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-neutral-900 text-white py-2 px-4 font-semibold"
                >
                    SUBMIT
                </button>
            </form>
            {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
        </div>
    );
}
