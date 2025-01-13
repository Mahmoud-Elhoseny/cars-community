'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 bg-gray-50">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="flex max-md:flex-col items-center justify-center gap-5 sm:px-16 px-6 py-12">
          <div className="flex flex-col items-center gap-8 text-center">
            <Image
              src={'/logo.svg'}
              width={138}
              height={20}
              alt="logo"
              className="object-contain hover:opacity-90 transition-opacity"
            />
            <p className="text-lg font-medium text-gray-700">
              Car Rental {year} <br />
              All rights reserved &copy;
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center flex-wrap mt-8 border-t border-gray-200 sm:px-16 px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-base text-gray-600">
              @{year} Car Rental. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
