import { NavLink } from "components";
import React, { useState } from "react";

const MobileNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="w-full px-1 py-6 top-0 z-50 sticky lg:hidden bg-dark backdrop-blur-sm">
            <header className="wrapper justify-between flex">
                <div className="flex items-center gap-4" onClick={closeMenu}>
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

                <button
                    className="cursor-pointer items-center rounded-md focus:outline-none"
                    onClick={toggleMenu}
                >
                    <img
                        src={isMenuOpen ? "/assets/icons/close.png" : "/assets/icons/menu.png"}
                        alt="menu toggle"
                        className="size-6"
                    />
                </button>
            </header>

            <div
                className={`pt-5 absolute left-0 right-0 transition-all duration-300 ease-in-out overflow-hidden
                ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
            >
                <div className="px-4 py-6 bg-black/70 text-white rounded-b-lg shadow-md">
                    <NavLinks mobile closeMenu={closeMenu} />
                </div>
            </div>
        </div>
    );
};

const NavLinks = ({ mobile = false, closeMenu }: NavLinksProps) => {
    const linkClass = mobile
        ? "cursor-pointer flex items-center gap-4 py-2 px-4 rounded hover:bg-white/10 transition"
        : "";

    const handleLinkClick = () => {
        if (mobile && closeMenu) {
            closeMenu();
        }
    };

    return (
        <>
            <div className={linkClass} onClick={handleLinkClick}>
                <NavLink href="/">
                    <img src="/assets/icons/home.png" alt="home" className="size-5" />
                    <h1 className="text-lg">Home</h1>
                </NavLink>
            </div>
            <div className={linkClass} onClick={handleLinkClick}>
                <NavLink href="/products">
                    <img src="/assets/icons/about.png" alt="about" className="size-5" />
                    <h1 className="text-lg">Products</h1>
                </NavLink>
            </div>
            <div className={linkClass} onClick={handleLinkClick}>
                <NavLink href="/about">
                    <img src="/assets/icons/projects.png" alt="projects" className="size-5" />
                    <h1 className="text-lg">About</h1>
                </NavLink>
            </div>
            <div className={linkClass} onClick={handleLinkClick}>
                <NavLink href="/contact">
                    <img src="/assets/icons/contact.png" alt="contact" className="size-5" />
                    <h1 className="text-lg">Contact</h1>
                </NavLink>
            </div>
        </>
    );
};

export default MobileNavbar;
