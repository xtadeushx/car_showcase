"use client";

import React, { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { manufacturers } from '@/constants/constants';

interface SearchManufacturerProps {
    manufacturer: string
    setManufacturer: (str: string) => void
}
const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState('');

    const filteredManufacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) =>
                item
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );

    return (
        <div className='search__manufacturer'>
            <Combobox>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            src='./car-logo.svg'
                            alt='car logo'
                            className='ml-4'
                            width={20}
                            height={20}
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        className='search-manufacturer__input'
                        displayValue={(item: string) => item}
                        onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
                        placeholder='Volkswagen...'
                    />
                    <Transition
                        as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")} // Reset the search query after the transition completes
                    >
                        <Combobox.Options className="search__manufacturer-options">
                            {
                                filteredManufacturers.length === 0 && query !== '' ? (
                                    <Combobox.Option
                                        value={query}
                                        className="search__manufacturer-option">
                                        Create "{query}"
                                    </Combobox.Option>
                                ) :
                                    (filteredManufacturers.map((item: string) => (
                                        <Combobox.Option
                                            key={item}
                                            className={({ active }) =>
                                                `relative search-manufacturer__option ${active ? "bg-primary-blue text-white" : "text-gray-900"
                                                }`
                                            }
                                            value={item}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                        {item}
                                                    </span>

                                                    {/* Show an active blue background color if the option is selected */}
                                                    {selected ? (
                                                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pribg-primary-purple"}`}
                                                        ></span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    )))
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer

