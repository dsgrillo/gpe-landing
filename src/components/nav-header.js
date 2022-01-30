import { useEffect } from "react";
import Link from "next/link";
import logo from "../../public/logo.svg";
import Button from "./button";
export default function NavHeader() {
  return (
    <nav
      id="header"
      className="sticky w-full z-30 top-0 text-black bg-gray-100 shadow"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link href={"/#"}>
            <a className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
              <svg
                className="h-8 fill-current inline mr-3"
                viewBox="0 0 328 305"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.7446 300.719C54.2667 295.763 71.1083 260.138 72.2187 237.813C72.2371 237.443 72.0564 237.111 71.7363 236.924C33.8503 214.811 -28.4304 150.65 21.7446 68.2192C84.7446 -35.2808 324.245 -16.7808 324.245 132.219C324.245 234.719 190.911 265.053 132.745 257.719C108.345 287.319 59.2445 305.719 56.7446 300.719Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="3"
                />
                <path
                  d="M87.7448 268.219C92.4115 258.053 98.9448 234.919 87.7448 223.719C73.7448 209.719 19.2448 187.719 24.7448 118.719C30.2448 49.7192 129.245 6.21919 205.745 29.7192C133.745 11.2192 37.2446 60.7192 33.2446 118.719C29.2446 176.719 73.7446 205.219 92.7446 218.219C107.945 228.619 105.078 250.553 101.745 260.219L87.7448 268.219Z"
                  fill="#003459"
                  stroke="#003459"
                  strokeWidth="6"
                />
                <path
                  d="M160.245 202.719V64.2192C160.245 61.4578 162.484 59.2192 165.245 59.2192H187.245C190.007 59.2192 192.245 61.4578 192.245 64.2192V202.719C192.245 205.481 190.007 207.719 187.245 207.719H165.245C162.484 207.719 160.245 205.481 160.245 202.719Z"
                  fill="#3C92CA"
                  stroke="#3C92CA"
                  strokeWidth="7"
                />
                <path
                  d="M213.245 202.719V109.719C213.245 106.958 215.484 104.719 218.245 104.719H240.245C243.007 104.719 245.245 106.958 245.245 109.719V202.719C245.245 205.481 243.007 207.719 240.245 207.719H218.245C215.484 207.719 213.245 205.481 213.245 202.719Z"
                  fill="#003459"
                  stroke="#003459"
                  strokeWidth="7"
                />
                <path
                  d="M107.245 202.719V145.719C107.245 142.958 109.484 140.719 112.245 140.719H134.245C137.007 140.719 139.245 142.958 139.245 145.719V202.719C139.245 205.481 137.007 207.719 134.245 207.719H112.245C109.484 207.719 107.245 205.481 107.245 202.719Z"
                  fill="#003459"
                  stroke="#003459"
                  strokeWidth="7"
                />
              </svg>
              GPE PESQUISA
            </a>
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button className="flex items-center p-1 text-blue-900 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow toggleColour lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-gray-800 p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link href={"/docs/01-introduction"}>
                <a
                  href={"/docs/01-introduction"}
                  className="inline-block py-2 px-4 font-bold hover:underline"
                >
                  Comece em poucos minutos
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href={"/#como-funciona"}>
                <a
                  href={"#como-funciona"}
                  className="inline-block py-2 px-4 font-bold no-underline"
                >
                  Como funciona
                </a>
              </Link>
            </li>
            {/*<li className="mr-3">*/}
            {/*  <Link href={"/#funcionalidades"}>*/}
            {/*    <a*/}
            {/*      href={"#funcionalidades"}*/}
            {/*      className="inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4"*/}
            {/*    >*/}
            {/*      Funcionalidades*/}
            {/*    </a>*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li className="mr-3">
              <Link href={"/#preco"}>
                <a
                  href={"#preco"}
                  className="inline-block py-2 px-4 font-bold no-underline"
                >
                  Preço
                </a>
              </Link>
            </li>
          </ul>
          <Link href={"/#contato"}>
            <Button className={"my-0"}>Registrar-se</Button>
          </Link>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}
