import React, { useState, useEffect } from "react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

function NavListMenu() {
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key} className="block p-2 rounded-lg hover:bg-gray-100">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center p-2 bg-blue-50 rounded-lg">
            {React.createElement(icon, { className: "h-6 w-6 text-gray-900" })}
          </div>
          <div>
            <div className="text-sm font-bold text-blue-gray-900">{title}</div>
            <div className="text-xs font-medium text-blue-gray-500">
              {description}
            </div>
          </div>
        </div>
      </a>
    )
  );

  return (
    <div className="relative group w-screen-xl left-0 ">
      <div
        className="flex items-center gap-2 py-2 pr-4 cursor-pointer"
        id="dropdownNavbarLink"
      >
        Resources
        <ChevronDownIcon className="h-3 w-3 transition-transform group-hover:rotate-180" />
      </div>
      <div
        className="invisible absolute w-96  bg-red-400 rounded-lg shadow-xl group-hover:visible"
        id="dropdownNavbar"
      >
        <div
          className="flex p-4 absolute mx-auto"
          aria-labelledby="dropdownLargeButton"
        >
          {renderItems}
        </div>
      </div>
    </div>
  );
}

function NavList() {
  return (
    <div className="flex flex-col mt-4 lg:flex-row lg:mt-0 lg:items-center">
      <a href="#" className="py-2 pr-4 font-medium text-blue-gray-900">
        Home
      </a>
      <NavListMenu />
      <a href="#" className="py-2 pr-4 font-medium text-blue-gray-900">
        Contact Us
      </a>
    </div>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="max-w-screen-2xl mx-auto px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a href="#" className="mr-4 py-1.5 text-xl font-bold">
          micca
        </a>
        <div className="hidden lg:flex ">
          <NavList />
        </div>
        <div className="hidden lg:flex gap-2">
          <button className="px-4 py-2 text-sm text-blue-gray-900 border border-blue-gray-900 rounded">
            POST
          </button>
          <button
            onClick={() => navigate("/signin")}
            className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
          >
            Sign In
          </button>
        </div>
        <button className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      <div className={`lg:hidden ${openNav ? "block" : "hidden"}`}>
        <NavList />
        <div className="flex flex-col gap-2 mt-4">
          <button className="px-4 py-2 text-sm text-blue-gray-900 border border-blue-gray-900 rounded">
            POST
          </button>
          <button
            onClick={() => navigate("/signin")}
            className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
