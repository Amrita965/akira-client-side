import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems1 = (
    <>
      <li className="hover:text-[#F05A66] font-bold text-sm">
        <Link to="">HOME</Link>
      </li>
      <li className="hover:text-[#F05A66] font-bold text-sm">
        <Link to="">SHOP</Link>
      </li>
      <li className="hover:text-[#F05A66] font-bold text-sm">
        <Link to="">BLOG</Link>
      </li>
      <li className="hover:text-[#F05A66] font-bold text-sm">
        <Link to="">PAGES</Link>
      </li>
      <li className="hover:text-[#F05A66] font-bold text-sm">
        <Link to="">BUY</Link>
      </li>
    </>
  );

  const menuItems2 = (
    <>
      <li className="hover:text-[#F05A66] hidden md:block font-bold text-sm">
        <Link to="">YOUR ACCOUNT</Link>
      </li>
      <li className="hover:text-[#F05A66]">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </li>
      <li className="hover:text-[#F05A66]">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </li>
      <li className="hover:text-[#F05A66]">
        <button className="flex items-center gap-2">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="min-h-4 min-w-4 rounded-full bg-[#F05A66] absolute -right-1 -top-1 flex justify-center items-center text-white text-xs">
              0
            </span>
          </div>

          <span class="font-bold text-sm">
            $<span>0.00</span>
          </span>
        </button>
      </li>
      <li className="xl:hidden">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      </li>
    </>
  );

  const handleChangeNavigationState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="py-4 shadow-md bg-white w-full px-4">
        <div className="flex items-center justify-between md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <button onClick={handleChangeNavigationState} className="xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div>
            <Link className="text-3xl md:text-4xl font-extrabold" to="/">
              <span className="text-[#F05A66]">A</span>KIRA
            </Link>
          </div>
          <ul
            className={`${
              isOpen ? "left-0" : "-left-96"
            } top-0 duration-300 ease-out flex flex-col xl:flex xl:flex-row gap-7 bg-white xl:bg-inherit w-96 xl:w-auto h-screen xl:h-auto absolute z-40 xl:static py-12 px-8 xl:p-0 border xl:border-0`}
          >
            {menuItems1}
            <li
              onClick={handleChangeNavigationState}
              className="xl:hidden absolute right-4 top-4"
            >
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          </ul>
          <ul className="flex items-center gap-5">{menuItems2}</ul>
        </div>
      </nav>
      {isOpen && (
        <div className="xl:hidden fixed top-0 left-0 min-h-screen w-screen bg-black  opacity-25"></div>
      )}
    </>
  );
};

export default Navbar;
