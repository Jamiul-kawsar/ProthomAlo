import React from 'react'
import NavBar from './NavBar'
import { sampleNews } from '../data/newsData'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
// {/* Breaking News Component */}
const BreakingNews = () => (
    <div className="bg-red-700 text-white sticky top-16 z-40 py-2">
        <div className="container mx-auto px-3 sm:px-4 flex items-center gap-3">
            <span className="bg-red-900 px-2 py-1 text-xs font-bold rounded">BREAKING</span>
            <div className="flex-1 overflow-hidden">
                <div className="animate-pulse text-sm sm:text-base font-medium">
                    Important news updates and headlines appear here in real-time
                </div>
            </div>
        </div>
    </div>
)
// {/* Featured Component */}
const Featured = ({ item }) => (
    <article className="relative bg-gray-100 rounded overflow-hidden hover:shadow-lg transition h-full group cursor-pointer">
        <div className="relative overflow-hidden">
            <img src={item.img} alt="featured" className="w-full h-40 sm:h-52 md:h-80 object-cover group-hover:scale-105 transition duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="p-3 sm:p-4 absolute bottom-0 left-0 right-0 text-white">
            <span className="inline-block text-xs bg-red-600 px-2 py-1 rounded font-bold mb-2">{item.category}</span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">{item.title}</h2>
            <p className="mt-2 text-sm text-gray-200 line-clamp-2">{item.desc}</p>
            <div className="mt-2 text-xs text-gray-300"></div>
        </div>
    </article>
)
// {/* News Card Component */}
const NewsCard = ({ item }) => (
    <div className="border rounded overflow-hidden bg-white hover:shadow-lg transition flex flex-col h-full group cursor-pointer">
        <div className="relative overflow-hidden h-32 sm:h-36 md:h-40">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
        </div>
        <div className="p-2 sm:p-3 flex flex-col flex-1">
            <div className="text-xs text-red-600 font-bold uppercase">{item.category}</div>
            <h3 className="mt-1 sm:mt-2 font-bold text-sm sm:text-base md:text-base leading-tight line-clamp-2 group-hover:text-red-700">{item.title}</h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-600 line-clamp-2 flex-1">{item.desc}</p>
            <div className="mt-2 text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</div>
        </div>
    </div>
)
// {/* Trending Card Component */}
const TrendingCard = ({ item }) => (
    <div className="py-3 border-b hover:bg-gray-50 transition cursor-pointer group">
        <div className="flex gap-2">
            <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded group-hover:opacity-80 transition" />
            <div className="flex-1 min-w-0">
                <div className="text-xs text-red-600 font-bold uppercase">{item.category}</div>
                <h4 className="font-bold text-sm leading-tight line-clamp-2 group-hover:text-red-700">{item.title}</h4>
                <div className="text-xs text-gray-500 mt-1">{new Date(item.date).toLocaleDateString()}</div>
            </div>
        </div>
    </div>
)
// {/* Category Section Component */}
const CategorySection = ({ title, items }) => (
    <section className="mb-8 sm:mb-10">
        <div className="border-l-4 border-red-600 pl-4 mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {items.map((item) => (
                <NewsCard key={item.id} item={item} />

            ))}
        </div>
    </section>
)

const Home = () => {
    const featured = sampleNews[0]
    const businessNews = sampleNews.filter(n => n.category === 'Business')
    const internationalNews = sampleNews.filter(n => n.category === 'International')
    const sportsNews = sampleNews.filter(n => n.category === 'Sports')
    const techNews = sampleNews.filter(n => n.category === 'Technology')
    const trendingNews = sampleNews.slice(1, 4)

    return (
        <div className="min-h-screen bg-white">
            <NavBar />
            <BreakingNews />

            <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
                {/* Main Featured with Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
                    {/* Featured Article - 3 columns */}
                    <div className="lg:col-span-3">
                        <Featured item={featured} />
                    </div>

                    {/* Trending Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="border rounded bg-gray-50 sticky top-32">
                            <div className="border-b-2 border-red-600 p-3 sm:p-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Trending Now</h3>
                            </div>
                            <div className="p-3 sm:p-4">
                                {trendingNews.map((item, idx) => (
                                    <div key={item.id}>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-red-600 font-bold text-lg">{idx + 1}</span>
                                            <h4 className="font-bold text-sm line-clamp-2 text-gray-900">{item.title}</h4>
                                        </div>
                                        {idx < trendingNews.length - 1 && <div className="border-b my-3"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Category Sections */}
                {businessNews.length > 0 && <CategorySection title="National News" items={businessNews} />}
                {internationalNews.length > 0 && <CategorySection title="International News" items={internationalNews} />}
                {sportsNews.length > 0 && <CategorySection title="Sports" items={sportsNews} />}
                {techNews.length > 0 && <CategorySection title="Technology" items={techNews} />}

                {/* All News Grid */}
                <section className="sm:mb-10">
                    <div className="border-l-4 border-red-600 pl-4 mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Latest News</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {sampleNews.map((item) => (
                            <NewsCard key={item.id} item={item} />
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-300 mt-10 sm:mt-12">
                <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
                        <div>
                            <h4 className="text-white font-bold mb-4">Categories</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition">National</a></li>
                                <li><a href="#" className="hover:text-white transition">International</a></li>
                                <li><a href="#" className="hover:text-white transition">Sports</a></li>
                                <li><a href="#" className="hover:text-white transition">Technology</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">About</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                                <li><a href="#" className="hover:text-white transition">Advertise</a></li>
                                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Follow Us</h4>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition"><Facebook size={20} className="text-white" /></a>
                                <a href="#" className="w-10 h-10 bg-sky-500 rounded flex items-center justify-center hover:bg-sky-600 transition"><Twitter size={20} className="text-white" /></a>
                                <a href="#" className="w-10 h-10 bg-red-600 rounded flex items-center justify-center hover:bg-red-700 transition"><Youtube size={20} className="text-white" /></a>
                                <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded flex items-center justify-center hover:opacity-70 transition"><Instagram size={20} className="text-white" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-6 text-center text-sm">
                        <p>&copy; 2026 Prothom Alo. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
