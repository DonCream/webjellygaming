import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between py-3 bg-black">
        <div className="container mx-auto grid grid-row">
          <div className="flex justify-between">
            <Link href="/">
              <a
                className="gta text-blueGray-700 text-sm font-bold inline-block whitespace-nowrap "
                href="#pablo"
              >
                <p className="child z-10">WebJelly</p>
                  <p className="parent  pt-12 pl-10">GAmIng</p>
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
