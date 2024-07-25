'use client'

import React, { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import { cn } from '../helpers/cn'
import LanguageSwitcher from './LanguageSwitcher'
import Link from 'next/link'

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleHamburger = (isToogled: boolean) => {
    setIsNavOpen(isToogled)
  }

  return (
    <>
      <div className="flex justify-between items-center bg-red-800 h-20 px-4 md:px8 relative">
        <Link href={'/'}>logo</Link>
        <div className="max-sm:hidden flex gap-16 ">
          <nav>
            <ul className="flex gap-4">
              <li>first</li>
              <li>second</li>
              <li>thrid</li>
              <li>fourth</li>
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>

        <div className="sm:hidden ">
          <nav
            className={cn(
              'absolute -left-full top-20 bg-red-600 w-full h-lvh flex flex-col items-center gap-4 p-4 transition-transform ',
              {
                'translate-x-full': isNavOpen,
              }
            )}
          >
            <ul className="flex gap-4 flex-col  ">
              <li>first</li>
              <li>second</li>
              <li>thrid</li>
              <li>fourth</li>
            </ul>
            <LanguageSwitcher />
          </nav>
          <Hamburger onToggle={handleHamburger} />
        </div>
      </div>
    </>
  )
}
