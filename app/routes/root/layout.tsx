import {Footer, Navbar} from 'components';
import React from 'react';
import {Outlet} from 'react-router'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen main-background">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout
