import React, { useState } from 'react';

const Software = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div id='advertisement' className="py-16 px-4 md:px-12 lg:px-24 text-center bg-white">
            {/* Heading Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leading companies trust us <br /> to develop software
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                We believe it’s important for everyone to have access to software especially when it comes to digital learning be navigate.
            </p>
            <a href="#" className="text-purple-600 font-medium underline mb-10 inline-block">
                Explore Details
            </a>

            {/* Video Section */}
            <div className="relative max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
                {!isPlaying ? (
                    <div className="w-full h-full bg-cover bg-center" style={{
                        backgroundImage: "url('https://t3.ftcdn.net/jpg/05/81/65/08/360_F_581650862_tdOma1hWudGjDqD8CzExG5YP8lvtGJa2.jpg')"
                    }}>
                        <button
                            onClick={() => setIsPlaying(true)}
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-60 transition"
                        >
                            <div className="bg-white p-4 rounded-full shadow-lg">
                                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </button>
                    </div>
                ) : (
                    <iframe
                        src="https://www.youtube.com/embed/g7iZrNWlgqM?si=hhJBeRkR1cVKWkiq"
                        title="Video"
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </div>
    );
};

export default Software;
