import { useState } from "react";
import { Link } from "react-router-dom";

const Headercomponet = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-5xl mx-auto  ">
        <nav className="border-b-4 border-IrishGreen p-4">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <Link to="/">MICAA</Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-IrishGreen rounded-lg inline-flex items-center justify-center"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={`${
                isOpen ? "block " : "hidden"
              } md:block w-full md:w-auto `}
            >
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-base md:font-medium ">
                <li>
                  <Link
                    to="/"
                    className="text-gray-700 border-b rounded border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2  md:p-0"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <div className="group relative">
                    <button
                      id="dropdownNavbarLink"
                      className="text-gray-700 border-b  rounded  md:hover:bg-transparent md:border-0 pl-3 pr-4  py-2  md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
                    >
                      Categories{" "}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="dropdownNavbar"
                      className="invisible absolute bg-gray-50 font-medium py-2 z-10 list-none divide-y divide-gray-100 rounded shadow-xl w-96 group-hover:visible"
                    >
                      <ul
                        className="py-2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <Link
                            to="/allblogs"
                            className="text-sm  rounded text-gray-700 block px-4 py-2"
                          >
                            Blogs
                          </Link>
                        </li>
                        <hr />{" "}
                        <li>
                          <Link
                            to="/"
                            className="text-sm  rounded text-gray-700 block px-4 py-2"
                          >
                            Productivity
                          </Link>
                        </li>
                        <hr />
                        <li>
                          <Link
                            to="/"
                            className="text-sm  rounded text-gray-700 block px-4 py-2"
                          >
                            Authors
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    to="/contact_us"
                    className="text-gray-700 border-b rounded border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2  md:p-0"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden lg:flex lg:gap-5 lg:justify-center lg:items-center">
              <div className="flex cursor-pointer gap-3 text-gray-700 border-b rounded border-gray-100 md:hover:bg-transparent md:border-0  pl-3 pr-4 py-2  md:p-0">
                <button
                  type="button"
                  className="inline-block rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-400 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                  POST
                </button>
                <button
                  type="button"
                  className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Headercomponet;
