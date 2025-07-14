import {Footer, MobileNavbar, Navbar} from 'components';
import React from 'react';
import {Outlet} from 'react-router'

const Layout = () => {
    return (
        <div className="min-h-screen main-background">
            <Navbar />
            <MobileNavbar />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout
