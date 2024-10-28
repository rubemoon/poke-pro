"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";
import { NAVIGATIONS, APP_NAME, MY_GITHUB_REPO } from "@/lib/constants";
import ButtonPrimary from "@/components/ui/ButtonPrimary";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-5 z-50 w-full bg-transparent pb-10">
      <nav
        className="relative max-w-[66rem] border border-neutral-700 rounded-[28px] py-3 px-5 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto bg-white dark:bg-gray-900 shadow-md"
        aria-label="Global"
      >
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <span className="text-indigo-500 text-2xl font-bold">{APP_NAME}</span>
            <Link href="/" aria-label="Home" className="flex items-center rounded-md text-xl font-semibold">
              <Image src="/logo.svg" alt="Logo" id="logo" width={45} height={45} />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="flex justify-center items-center text-sm font-semibold rounded-full bg-gray-200 p-2 dark:bg-gray-800 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="navbar-collapse"
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <FiX size={24} />
              ) : (
                <FiMenu size={24} />
              )}
            </button>
          </div>
        </div>

        <div id="navbar-collapse" className={`${isOpen ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
            {NAVIGATIONS.map((nav) => (
              <div key={nav.name} className="relative group">
                <Link href={nav.path} className="text-sm hover:text-neutral-300 md:py-4" target={nav.external ? "_blank" : "_self"}>
                  {nav.name}
                </Link>
              </div>
            ))}
            <div>
              <ButtonPrimary
                as="a"
                href={MY_GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver Repositório no GitHub"
                className="flex items-center gap-2"
              >
                <FiGithub size={20} />
                View on GitHub
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </nav>
    </header>

  );
}
