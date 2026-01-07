import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { sampleNews } from '../data/newsData'
import { ArrowLeft, Share2, Bookmark, Heart } from 'lucide-react'

const NewsDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [isBookmarked, setIsBookmarked] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    const news = sampleNews.find(item => item.id === parseInt(id))

    if (!news) {
        return (
            <div className="min-h-screen bg-white">
                <NavBar />
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Article Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="mt-6 inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </button>
                </div>
            </div>
        )
    }

    const relatedNews = sampleNews
        .filter(item => item.category === news.category && item.id !== news.id)
        .slice(0, 3)

    const formattedDate = new Date(news.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar />

            {/*Cover Image */}
            <div className="relative w-full h-96 sm:h-96 md:h-screen max-h-[600px] overflow-hidden bg-gray-200">
                <img
                    src={news.img}
                    alt={news.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition z-10"
                >
                    <ArrowLeft size={24} />
                </button>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                    <span className="inline-block bg-red-600 text-white px-3 py-1 rounded text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                        {news.category}
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        {news.title}
                    </h1>
                </div>
            </div>

            {/* Article Content */}
            <div className="container mx-auto px-4 py-8 sm:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Main Content - 2 columns */}
                    <div className="lg:col-span-2">
                        {/* Article Meta Information */}
                        <div className="bg-white rounded-lg p-4 sm:p-6 mb-6 shadow-sm border-l-4 border-red-600">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Published on</p>
                                    <p className="text-lg font-semibold text-gray-800">{formattedDate}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setIsLiked(!isLiked)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${isLiked
                                                ? 'bg-red-100 text-red-600'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
                                        <span className="text-sm font-medium">{isLiked ? 'Liked' : 'Like'}</span>
                                    </button>
                                    <button
                                        onClick={() => setIsBookmarked(!isBookmarked)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${isBookmarked
                                                ? 'bg-blue-100 text-blue-600'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
                                        <span className="text-sm font-medium">{isBookmarked ? 'Saved' : 'Save'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Article Text */}
                        <article className="bg-gray-100 rounded-lg p-6 sm:p-8 shadow-sm">
                            <div className="prose prose-sm sm:prose md:prose-base max-w-none">
                                <p className="text-base sm:text-lg leading-relaxed text-gray-700 whitespace-pre-line mb-6 font-medium text-justify">
                                    {news.content}
                                </p>
                            </div>

                            {/* Share Section */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-4 font-semibold">Share this article</p>
                                <div className="flex flex-wrap gap-3">
                                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">
                                        <Share2 size={18} />
                                        Facebook
                                    </button>
                                    <button className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition text-sm">
                                        <Share2 size={18} />
                                        Twitter
                                    </button>
                                    <button className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition text-sm">
                                        <Share2 size={18} />
                                        LinkedIn
                                    </button>
                                    <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition text-sm">
                                        <Share2 size={18} />
                                        Copy Link
                                    </button>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Sidebar - 1 column */}
                    <div className="lg:col-span-1">
                        {/* Related News */}
                        <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-red-600">
                                Related News
                            </h3>
                            <div className="space-y-4">
                                {relatedNews.length > 0 ? (
                                    relatedNews.map(item => (
                                        <div
                                            key={item.id}
                                            onClick={() => navigate(`/news/${item.id}`)}
                                            className="cursor-pointer group"
                                        >
                                            <div className="relative overflow-hidden rounded mb-2 h-24">
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                                />
                                            </div>
                                            <h4 className="font-semibold text-sm text-gray-800 group-hover:text-red-600 transition line-clamp-2">
                                                {item.title}
                                            </h4>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {new Date(item.date).toLocaleDateString()}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-600 text-sm">No related articles found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* More from Category */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-red-600">
                        More from {news.category}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sampleNews
                            .filter(item => item.category === news.category && item.id !== news.id)
                            .slice(0, 3)
                            .map(item => (
                                <div
                                    key={item.id}
                                    onClick={() => navigate(`/news/${item.id}`)}
                                    className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer group"
                                >
                                    <div className="relative overflow-hidden h-40 sm:h-48">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="text-xs text-red-600 font-bold uppercase mb-2">{item.category}</p>
                                        <h4 className="font-bold text-base text-gray-800 mb-2 line-clamp-2 group-hover:text-red-600 transition">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{item.desc}</p>
                                        <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetails
