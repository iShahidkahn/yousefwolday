import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    return (
        <Disclosure as="nav" className="border-b navbar fixed z-50 w-full bg-white bg-opacity-90 bg-blend-color-burn">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-20 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <h1 className=' text-lg ms-1  lg:ms-0 lg:text-xl font-medium'>Logo Brand</h1>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4 ms-0 lg:ms-20">
                                        <a href='/#' className='text-gray-900 px-3 py-2 font-medium  cursor-pointer hover:text-sky-600'>
                                            Home
                                        </a>
                                        <a href='/#' className='text-gray-900 px-3 py-2 font-medium  cursor-pointer hover:text-sky-600'>
                                            About us
                                        </a>
                                        <a href='/#' className='text-gray-900 px-3 py-2 font-medium  cursor-pointer hover:text-sky-600'>
                                            Contact us
                                        </a>
                                        <Menu as="div" className="relative  px-3 py-2">
                                            <div>
                                                <Menu.Button className="relative flex items-center gap-1 text-gray-900 font-medium  cursor-pointer hover:text-sky-600">
                                                    More
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        <a
                                                            href="/#"
                                                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                        >
                                                            Your Profile
                                                        </a>

                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <a
                                                            href="/#"
                                                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                        >
                                                            Your Profile
                                                        </a>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <a
                                                            href="/#"
                                                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                        >
                                                            Your Profile
                                                        </a>
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex gap-5">                          
                                <button
                                    type="button"
                                    className="btn-demo py-1.5 lg:py-2.5 px-5"
                                >
                                    Get a demo
                                </button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <a href='/#' className='text-gray-900 px-3 py-2 font-medium block  cursor-pointer hover:text-sky-600'>
                                Home
                            </a>
                            <a href='/#' className='text-gray-900 px-3 py-2 font-medium block cursor-pointer hover:text-sky-600'>
                                About us
                            </a>
                            <a href='/#' className='text-gray-900 px-3 py-2 font-medium block cursor-pointer hover:text-sky-600'>
                                Contact us
                            </a>
                            <Menu as="div" className="relative px-3 py-2">
                                <div>
                                    <Menu.Button className="relative flex items-center gap-1 text-gray-900 font-medium  cursor-pointer hover:text-sky-600">
                                        More
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute  z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>

                                            <a
                                                href="/#"
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                            >
                                                Your Profile
                                            </a>

                                        </Menu.Item>
                                        <Menu.Item>
                                            <a
                                                href="/#"
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                            >
                                                Your Profile
                                            </a>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <a
                                                href="/#"
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                            >
                                                Your Profile
                                            </a>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar
