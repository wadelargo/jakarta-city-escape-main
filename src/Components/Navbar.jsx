export default function Navbar() {
  let href = window.location.pathname.split("/");

  return (
    <nav
      className="w-screen bg-gray-100 bg-opacity-50 shadow fixed top-0 z-[99] transition-all duration-500 font-worksans font-extralight"
      id="nav"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-[6rem] py-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center tracking-wide text-2xl font-extrabold whitespace-nowrap dark:text-white">
            Jakarta<span className="font-normal">CityEscape</span>
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200 dark:text-stone-400 dark:hover:bg-gray-700 dark:focus:ring-stone-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 peer rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </a>
              <div
                className={`${
                  href[1] === ""
                    ? "w-14 active-underscore ml-3 lg:ml-0"
                    : "ml-3 lg:ml-0 animated-underscore peer-hover:w-14"
                }`}
              ></div>
            </li>
            <li>
              <a
                href="/jelajahi"
                className="block py-2 px-3 text-gray-900 peer rounded md:bg-transparent md:p-0"
              >
                Jelajahi Jakarta di Sini!
              </a>
              <div
                className={`${
                  href[1] === "jelajahi" ||
                  (href[1] === "jelajahi" && href[2] !== "")
                    ? "w-44 active-underscore ml-3 lg:ml-0"
                    : "ml-3 lg:ml-0 animated-underscore peer-hover:w-44"
                }`}
              ></div>
            </li>
            <li>
              <a
                href="/about-devs"
                className="block py-2 px-3 text-gray-900 peer rounded md:bg-transparent md:p-0"
              >
                About Devs
              </a>
              <div
                className={`${
                  href[1] === "about-devs"
                    ? "w-24 active-underscore ml-3 lg:ml-0"
                    : "ml-3 lg:ml-0 animated-underscore peer-hover:w-24"
                }`}
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
