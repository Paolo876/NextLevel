import Link from "next/link";
import logo from "@/assets/logo.png"
import classes from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {

    return (
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logo} alt="logo" priority/>
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <NavLink href="/meals" name="Browse Meals"/>
                        <NavLink href="/community" name="Foodies Community"/>
                    </ul>
                </nav>
            </header>
        </>

    );
}

export default MainHeader;