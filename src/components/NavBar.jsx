import React, { useState } from 'react'
import { Menu, X, Facebook, Twitter, Youtube, Instagram, Download } from 'lucide-react'

const NavBar = () => {
    const menus = ['Home', 'National', 'International', 'Sports', 'Technology', 'Entertainment']
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3">
                {/* Logo */}
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-fit">
                    <img src="/logo.png" alt="Logo" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 object-cover rounded" />
                    <div>
                        <h1 className="text-base sm:text-lg md:text-xl font-bold">Prothom Alo</h1>
                        <p className="hidden sm:block text-xs text-gray-500">Daily News</p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-3 xl:gap-6">
                    {menus.map((m) => (
                        <a key={m} href="#" className="text-gray-700 hover:text-blue-600 text-sm md:text-base font-medium transition">
                            {m}
                        </a>
                    ))}
                </nav>

                {/* Search & Subscribe (Desktop & Tablet) */}
                <div className="hidden md:flex items-center gap-1.5 lg:gap-3">
                    <input
                        className="border border-gray-300 rounded px-2 py-1.5 text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-blue-600 transition"
                        placeholder="Search"
                    />
                    <button className="text-xs sm:text-sm bg-blue-600 text-white px-2 sm:px-3 py-1.5 rounded hover:bg-blue-700 transition whitespace-nowrap">Subscribe</button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="">
                    <nav className="px-4 py-6 space-y-1">
                        {/* Navigation Items */}
                        {menus.map((m) => (
                            <a
                                key={m}
                                href="#"
                                className="block text-gray-700 hover:text-blue-600 font-medium text-base py-3 px-3 rounded hover:bg-gray-100 transition border-b"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {m}
                            </a>
                        ))}

                        {/* Search & Subscribe */}
                        <div className="border-b py-4">
                            <div className="flex gap-2 mb-3">
                                <input
                                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm placeholder-gray-500"
                                    placeholder="Search news..."
                                />
                                <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition">Search</button>
                            </div>
                            <button className="w-full bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition font-semibold">Subscribe</button>
                        </div>

                        {/* Follow Us Section */}
                        <div className="py-6 border-b">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                            <div className="flex gap-3 flex-wrap">
                                <a href="#" className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded hover:bg-blue-700 transition" title="Facebook">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="flex items-center justify-center w-10 h-10 bg-sky-500 text-white rounded hover:bg-sky-600 transition" title="Twitter">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded hover:bg-red-700 transition" title="YouTube">
                                    <Youtube size={20} />
                                </a>
                                <a href="#" className="flex items-center justify-center w-10 h-10 bg-pink-600 text-white rounded hover:bg-pink-700 transition" title="Instagram">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Mobile App Download Section */}
                        <div className="py-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Download Our App</h3>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center gap-3 p-3 border border-gray-300 rounded hover:bg-gray-50 transition">
                                    <Download size={32} className="text-black" />
                                    <div>
                                        <div className="text-xs text-gray-500">Get it on</div>
                                        <div className="font-semibold text-black">Google Play</div>
                                    </div>
                                </a>
                                <a href="#" className="flex items-center gap-3 p-3 border border-gray-300 rounded hover:bg-gray-50 transition">
                                    <Download size={32} className="text-black" />
                                    <div>
                                        <div className="text-xs text-gray-500">Download on the</div>
                                        <div className="font-semibold text-black">App Store</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default NavBar
