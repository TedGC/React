
import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import classes from './meals-header.module.css'
import Image from 'next/image'
import MainHeaderBackground from './main-header-background'
import NavLink from './nav-link'


export default function MealsHeader() {


    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href='/'>
                    <Image src={logoImg} alt="food image" priority />
                    Foodie
                </Link>


                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href='/meals' >
                                Browse Meals
                            </NavLink>
                        </li>

                        <li>
                            <NavLink href='/community' >
                                Browse Community
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </header>
        </>
    )
}