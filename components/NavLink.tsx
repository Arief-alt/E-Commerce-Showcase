import React from 'react'
import {Link} from "react-router";

const NavLink = ({href, children}: NavLink) => {
    return (
        <Link
            to={href}
            className="text-white text-lg"
        >
            <span>
                {children}
            </span>
        </Link>
    )
}
export default NavLink
