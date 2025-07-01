import React from 'react'

const Footer = () => {
    return (
        <nav className="w-full p-6 bg-dark">
            <header className="justify-center flex flex-col wrapper gap-4">
                <h1 className="text-white text-[28px] font-semibold">
                    E-Commerce Showcase
                </h1>

                <span className="text-white text-lg">
                    Your trusted partner for premium products
                </span>

                <span className="text-white text-sm">
                    &copy; {new Date().getFullYear()} E-Commerce Showcase App. All rights reserved.
                </span>
            </header>
        </nav>
    )
}
export default Footer
