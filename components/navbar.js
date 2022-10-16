import { TabList, Tab } from "@tremor/react";

export default function Header({}) {
  return (
    <nav>
      <div>
        <div className="relative flex h-16 py-12 items-center justify-between">
          <div className="font-large text-lg font-extrabold text-3xl">CryptoWatch</div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue px-3 py-8 text-sm font-medium border-b-2 border-blue"
                aria-current="page"
              >
                Cryptocurrencies
              </a>
              <a
                href="#"
                className="hover:text-blue px-3 py-8 text-sm font-medium hover:border-b-2 hover:border-blue"
              >
                Watchlist
              </a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className="p-1 text-gray-400 ">
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
