import React from 'react'
import {NavLink} from "./index";

const Navbar = () => {
    return (
        <nav className="flex w-full p-6 sticky top-0 z-50 bg-dark backdrop-blur-sm">
            <header className="flex wrapper justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded flex items-center justify-center bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 shadow-md">
                        <img
                            src="/assets/icons/shopping-cart.png"
                            alt="Shopping Cart"
                            className="size-8"
                        />
                    </div>

                    <h1 className="text-white text-2xl">
                        ShopHub
                    </h1>
                </div>

                <div className="flex items-center gap-8">
                   <NavLink
                       href="/"
                   >
                       <h1 className="text-white text-lg">Home</h1>
                   </NavLink>
                    <NavLink
                       href="/products"
                   >
                       <h1 className="text-white text-lg">Products</h1>
                   </NavLink>
                    <NavLink
                       href="/about"
                   >
                       <h1 className="text-white text-lg">About</h1>
                   </NavLink>
                    <NavLink
                       href="/contact"
                   >
                       <h1 className="text-white text-lg">Contact</h1>
                   </NavLink>
                </div>
            </header>
        </nav>
    )
}
export default Navbar
