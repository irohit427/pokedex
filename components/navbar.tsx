import React from 'react'
import { ThemeToggler } from './themeToggler'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from './ui/input'

const Navbar = () => {
  return (
    <div className='flex flex-row w-full mx-auto items-center justify-evenly py-3'>
      <div className='w-full'></div>
      <div className='w-full flex items-center justify-center'>
        <Link href="/">
          <Image src="/logo.png" alt='logo' width={200} height={0}/>
        </Link>
      </div>
      <div className='flex gap-2 w-full'>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px] focus-visible:ring-transparent"
      />
      <ThemeToggler />
      </div>
    </div>
  )
}

export default Navbar