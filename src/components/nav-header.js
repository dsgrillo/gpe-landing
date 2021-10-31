import { useEffect } from "react";
import Link from "next/link";
import logo from "../../public/logo.svg";
export default function NavHeader() {
  useEffect(() => {
    let scrollpos = window.scrollY;
    const header = document.getElementById("header");
    const navcontent = document.getElementById("nav-content");
    const navaction = document.getElementById("navAction");
    const toToggle = document.querySelectorAll(".toggleColour");

    const listener = function () {
      /*Apply classes for slide in bar*/
      scrollpos = window.scrollY;

      if (scrollpos > 10) {
        header.classList.add("bg-white");
        navaction.classList.remove("bg-white");
        navaction.classList.add("gradient");
        navaction.classList.remove("text-gray-800");
        navaction.classList.add("text-white");
        //Use to switch toggleColour colours
        for (var i = 0; i < toToggle.length; i++) {
          toToggle[i].classList.add("text-gray-800");
          toToggle[i].classList.remove("text-white");
        }
        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-white");
      } else {
        header.classList.remove("bg-white");
        navaction.classList.remove("gradient");
        navaction.classList.add("bg-white");
        navaction.classList.remove("text-white");
        navaction.classList.add("text-gray-800");
        //Use to switch toggleColour colours
        for (let i = 0; i < toToggle.length; i++) {
          toToggle[i].classList.add("text-white");
          toToggle[i].classList.remove("text-gray-800");
        }

        header.classList.remove("shadow");
        navcontent.classList.remove("bg-white");
        navcontent.classList.add("bg-gray-100");
      }
    };

    document.addEventListener("scroll", listener);

    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");

    document.onclick = check;

    function check(e) {
      var target = e && e.target;

      //Nav Menu
      if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
          // click on the link
          if (navMenuDiv.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden");
          } else {
            navMenuDiv.classList.add("hidden");
          }
        } else {
          // click both outside link and outside menu, hide menu
          navMenuDiv.classList.add("hidden");
        }
      }
    }
    function checkParent(t, elm) {
      while (t.parentNode) {
        if (t == elm) {
          return true;
        }
        t = t.parentNode;
      }
      return false;
    }

    return () => {
      document.removeEventListener("scroll", listener);
      document.removeEventListener("click", check);
    };
  }, []);

  return (
    <nav id="header" className="fixed w-full z-30 top-0 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link href={"/"}>
            <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
              {/*<span className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">*/}
              {/*  /!*!--Icon from: http://www.potlabicons.com/ -->*!/*/}
              {/*  <svg*/}
              {/*    className="h-8 fill-current inline mr-3"*/}
              {/*    xmlns="http://www.w3.org/2000/svg"*/}
              {/*    viewBox="0 0 512.005 512.005"*/}
              {/*  >*/}
              {/*    <rect*/}
              {/*      fill="#2a2a31"*/}
              {/*      x="16.539"*/}
              {/*      y="425.626"*/}
              {/*      width="479.767"*/}
              {/*      height="50.502"*/}
              {/*      transform="matrix(1,0,0,1,0,0)"*/}
              {/*    />*/}
              {/*    <path*/}
              {/*      className="plane-take-off"*/}
              {/*      d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "*/}
              {/*    />*/}
              {/*  </svg>*/}
              {/*  GPE PESQUISA*/}
              {/*</span>*/}
              {/*!--Icon from: http://www.potlabicons.com/ -->*/}
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
              <Link href={"/#como-funciona"}>
                <a
                  href={"#como-funciona"}
                  className="inline-block py-2 px-4 font-bold no-underline"
                >
                  Como funciona?
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href={"/#funcionalidades"}>
                <a
                  href={"#funcionalidades"}
                  className="inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                >
                  Funcionalidades
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href={"/#preco"}>
                <a
                  href={"#preco"}
                  className="inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                >
                  Preço
                </a>
              </Link>
            </li>
          </ul>
          <Link href={"/#contato"}>
            <a
              id="navAction"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Registrar-se
            </a>
          </Link>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}
