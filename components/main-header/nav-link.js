'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css"

const NavLink = ({ href, name }) => {
    const path = usePathname();

    return (
        <li>
            <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>{name}</Link>
        </li>
    );
}

export default NavLink;