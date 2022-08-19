/** @jsx h */
import { useState } from "preact/hooks";
import * as React from 'preact';
import { h } from "preact";
import { Menu, Transition } from 'react/preact';
import { tw } from "@twind";

//import { ReactRouterDom } from "../utils/deps-client.ts";
//const { Link } = ReactRouterDom;
//import Router from 'preact-router';


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join('')
}

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav class={tw`w-full bg-blue-500 shadow blur-sm`}>
            <div class={tw`justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8`}>
                <div>
                    <div class={tw`flex items-center justify-between py-3 md:py-5 md:block`}>
                        <a href="javascript:void(0)">
                            <h2 class={tw`text-2xl font-bold text-white`}>
                            <img
                              src="../logo.svg"
                              height="80px"
                              alt="the fresh logo: a sliced lemon dripping with juice" />
                            </h2>
                        </a>
                        <div class={tw`md:hidden`}>
                            <button
                                class={tw`p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border`}
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class={tw`w-6 h-6 text-white`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class={tw`w-6 h-6 text-white`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        class={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        {/*
                        <ul class={tw`items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0`}>
                            <li class={tw`text-white hover:text-indigo-200`}>
                                <a href="/">
                                    <strong>00</strong> Home
                                </a>
                            </li>
                            <li class={tw`text-white hover:text-indigo-200`}>
                                <a href="/dest">
                                    <strong>01</strong> Destination
                                </a>
                            </li>
                            <li class={tw`text-white hover:text-indigo-200`}>
                                <a href="/crew">
                                <strong>02</strong> Crew
                                </a>
                            </li>
                            <li class={tw`text-white hover:text-indigo-200`}>
                                <a href="/tech">
                                <strong>03</strong> Technology
                                </a>
                            </li>
                        </ul>
                        */}

                        <div class={tw`mt-3 space-y-2 lg:hidden md:inline-block`}>
                            
                            {/*
                    <a
                        href="javascript:void(0)"
                        class={tw`inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800`}
                    >
                        Sign in
                    </a>
                    <a
                        href="javascript:void(0)"
                        class={tw`inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100`}
                    >
                        Sign up
                    </a>
                    */}
                    
                </div>
                    </div>
                </div>
                <div class={tw`hidden space-x-2 md:inline-block`}>
                   
                <ul class={tw`items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0`}>
                            <li class={tw`text-white hover:text-indigo-200`}>
                                <a href="/">
                                    <strong>00</strong> Home
                                </a>
                            </li>
                            <li class={tw`text-white hover:text-indigo-200`}>
                                <a href="/dest">
                                    <strong>01</strong> Destination
                                </a>
                            </li>
                            <li class={tw`text-white hover:text-indigo-200`}>
                                <a href="/crew">
                                <strong>02</strong> Crew
                                </a>
                            </li>
                            <li class={tw`text-white hover:text-indigo-200`}>
                                <a href="/tech">
                                <strong>03</strong> Technology
                                </a>
                            </li>
                        </ul>
                   {/*
                    <a
                        href="javascript:void(0)"
                        class={tw`px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800`}
                    >
                        Sign in
                    </a>
                    <a
                        href="javascript:void(0)"
                        class={tw`px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100`}
                    >
                        Sign up
                    </a>
                */}
                </div>
            </div>
        </nav>
  )
}