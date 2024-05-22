"use client"

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

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathName === link.href

                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={isActive ? "active" : ""}
                    >
                        {link.label}
                    </Link>
                )
            })}
        </>
    )
}

export { Navigation }