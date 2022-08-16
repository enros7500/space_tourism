import * as React from 'preact';
import { Disclosure, Menu, Transition, BellIcon, MenuIcon, XIcon } from 'react/preact';
import { tw } from "@twind";
//import { BellIcon, MenuIcon, XIcon } from 'twind/outline';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join('')
}

export default function Example() {
  return (
    <Disclosure as="nav" class={tw`bg-gray-800`}>
      {({ open }) => (
        <>
          <div class={tw`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`}>
            <div class={tw`relative flex items-center justify-between h-16`}>
              <div class={tw`absolute inset-y-0 left-0 flex items-center sm:hidden`}>
                {/* Mobile menu button*/}
                <Disclosure.Button class={tw`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}>
                  <span class={tw`sr-only`}>Open main menu</span>
                  {/*{open ? (
                    <XIcon class={tw`block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon class={tw`block h-6 w-6" aria-hidden="true" />
                  )} */}
                </Disclosure.Button>
              </div>
              <div class={tw`flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`}>
                <div class={tw`flex-shrink-0 flex items-center`}>
                  <img
                    class={tw`block lg:hidden h-8 w-auto`}
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                    alt="Workflow"
                  />
                  <img
                    class={tw`hidden lg:block h-8 w-auto`}
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                    alt="Workflow"
                  />
                </div>
                <div class={tw`hidden sm:block sm:ml-6`}>
                  <div class={tw`flex space-x-4`}>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        class={classNames(
                          item.current ? '{tw`bg-gray-900 text-white`}' : '{tw`text-gray-300 hover:bg-gray-700 hover:text-white`}',
                          '{tw`px-3 py-2 rounded-md text-sm font-medium`}'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div class={tw`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}>
                <button
                  type="button"
                  class={tw`bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
                >
                  <span class={tw`sr-only`}>View notifications</span>{/*
                  <BellIcon class={tw`h-6 w-6`} aria-hidden="true" />
                        */}
                </button>

                {/* Profile dropdown */}
                <Menu as="div" class={tw`ml-3 relative`}>
                  <div>
                    <Menu.Button class={tw`bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}>
                      <span class={tw`sr-only`}>Open user menu</span>
                      <img
                        class={tw`h-8 w-8 rounded-full`}
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={React.Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items class={tw`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            class={classNames(active ? '{tw`bg-gray-100`}' : '', '{tw`block px-4 py-2 text-sm text-gray-700`}')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            class={classNames(active ? '{tw`bg-gray-100`}' : '', '{tw`block px-4 py-2 text-sm text-gray-700`}')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            class={classNames(active ? '{tw`bg-gray-100`}' : '', '{tw`block px-4 py-2 text-sm text-gray-700`}')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel class={tw`sm:hidden`}>
            <div class={tw`px-2 pt-2 pb-3 space-y-1`}>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  class={classNames(
                    item.current ? '{tw`bg-gray-900 text-white`}' : '{tw`text-gray-300 hover:bg-gray-700 hover:text-white`}',
                    '{tw`block px-3 py-2 rounded-md text-base font-medium`}'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}