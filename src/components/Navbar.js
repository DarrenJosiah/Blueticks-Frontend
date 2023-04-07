import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <span className="flex items-center">
            <img src="https://w7.pngwing.com/pngs/80/808/png-transparent-verified-right-tick-ok-blue-icon-thumbnail.png" className="h-6 mr-3 sm:h-9 rounded-3xl" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-blue-700 dark:text-white">Blueticks</span>
            </span>
            
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-700 md:hover:text-blue-700 md:p-0 dark:text-white" aria-current="page">Listing</a>
                </li>
                <li>
                <a href="/add" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Contact</a>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar