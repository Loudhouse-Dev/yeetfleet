import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import nikeLogo from '../assets/nike.svg';
import adidasLogo from '../assets/adidas.svg';
import jordanLogo from '../assets/jordan.svg';
import onLogo from '../assets/on.svg';
import pumaLogo from '../assets/puma.svg';

import { ChevronDownIcon } from '@heroicons/react/20/solid';

const shopBrands = {
  brands: [
    { name: 'Nike', href: '#', imageSrc: { nikeLogo }, imageAlt: 'Shop Nike' },
    {
      name: 'Adidas',
      href: '#',
      imageSrc: { adidasLogo },
      imageAlt: 'Shop Adidas',
    },
    {
      name: 'Jordan',
      href: '#',
      imageSrc: { jordanLogo },
      imageAlt: 'Shop Jordan',
    },
    { name: 'On', href: '#', imageSrc: { onLogo }, imageAlt: 'Shop On' },
    { name: 'Puma', href: '#', imageSrc: { pumaLogo }, imageAlt: 'Shop Puma' },
  ],
};

const pages = [
  { name: 'Home', href: '#' },
  { name: 'Stores', href: '#' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile Navigation */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-250 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-250 ease-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute inset-0 bg-gray-600 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-250 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-250 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {shopBrands.brands.map((brand) => (
                        <Tab
                          key={brand.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {brand.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                </Tab.Group>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Navigation;
