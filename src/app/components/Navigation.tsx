'use client'

import React, { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import { cn } from '../helpers/cn'

export default function Navigation() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const handleHamburger = (isToogled: boolean) => {
        setIsNavOpen(isToogled)
    }

    console.log(isNavOpen)

    return (
        <>
            <div className="flex justify-between items-center bg-red-800 h-20 px-4 md:px8 relative">
                <div>logo</div>
                <div className="max-sm:hidden ">
                    <nav>
                        <ul className="flex gap-4">
                            <li>first</li>
                            <li>second</li>
                            <li>thrid</li>
                            <li>fourth</li>
                        </ul>
                    </nav>
                </div>

                <div className="sm:hidden ">
                    <nav
                        className={cn('absolute left-0 top-0', {
                            'top-10': isNavOpen,
                        })}
                    >
                        <ul className="flex gap-4 ">
                            <li>first</li>
                            <li>second</li>
                            <li>thrid</li>
                            <li>fourth</li>
                        </ul>
                    </nav>
                    <Hamburger onToggle={handleHamburger} />
                </div>
            </div>
        </>
    )
}
