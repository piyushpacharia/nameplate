import React from 'react'
import { IoClose } from 'react-icons/io5'

export default function Signin({ handleSignInModel, handleSignUpModel }) {
    return (
        <div>
            <div
                id="signin-model"
                tabIndex={-1}
                aria-hidden="true"
                className="bg-[#00000080] flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
            >
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Sign In
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={handleSignInModel}
                            >
                                <IoClose />
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <form className="max-w-sm mx-auto">
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@flowbite.com"
                                        required=""
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Your password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                    />
                                </div>
                                <div className="flex items-center border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button
                                        type="button"
                                        className="text-black w-full border-[#b4b4b4] border-2 bg-white hover:bg-[#b4b4b4] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <div className='py-5'>
                                    <p className='text-center'>
                                        Don't have an account? 
                                        <span className='cursor-pointer text-green-500 font-semibold' onClick={handleSignUpModel}>Sign Up</span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
