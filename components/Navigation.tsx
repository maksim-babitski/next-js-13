"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Navlink = {
    label: string
    href: string
}

type Props = {
    navLinks: Navlink[]
}

const Navigation = ({ navLinks }: Props) => {
    const pathName = usePathname()
    const session = useSession()
    console.log(session)

    const isActive = (href: string) => pathName === href

    return (
        <>
            {navLinks.map((link) => {

                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={isActive(link.href) ? "active" : ""}
                    >
                        {link.label}
                    </Link>
                )
            })}
            {session.data && (
                <Link
                    href='/profile'
                    className={isActive('/profile') ? "active" : ""}
                >
                    Profile
                </Link>
            )}
            {session.data
                ? <Link
                    href="#"
                    onClick={() => signOut({
                        callbackUrl: '/'
                    })}
                >
                    Sign Out
                </Link>
                : <Link
                    href="/signin"
                    className={isActive('/signin') ? "active" : ""}
                >
                    SignIn
                </Link>
            }
        </>
    )
}

export { Navigation }