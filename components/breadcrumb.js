export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol role="list" className="items-center space-x-2 flex">
        <li>
          <div className="flex items-center">
            <a href="#" className="mr-2 text-sm font-medium text-gray">
              Cryptocurrencies
            </a>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-5 w-4 text-gray"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <a href="#" className="mr-2 text-sm font-medium text-gray">
              Coins
            </a>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-5 w-4 text-gray"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li className="text-sm">
          <a href="#" aria-current="page" className="font-medium text-dark">
            Bitcoin
          </a>
        </li>
      </ol>
    </nav>
  );
}
