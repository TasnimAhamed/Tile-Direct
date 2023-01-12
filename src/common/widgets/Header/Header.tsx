import { Burger } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div className="absolute top-0 z-50 w-full ">
      <div className="navContainer flex items-center justify-between flex-wrap lg:flex-nowrap py-10">
        <div className="flex items-center justify-between lg:w-auto w-full lg:border-b-0  ">
          <Link to="/">
            <div className="flex items-center flex-shrink-0  mr-16 cursor-pointer">
              <img src="/images/logo.svg" alt="logo" />
            </div>
          </Link>

          <div className="block lg:hidden ">
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
              color="#ffffff"
            />
          </div>
        </div>

        <div className="text-gray-500 order-3 w-full lg:w-auto lg:order-2">
          <div
            className={
              opened
                ? "w-full justify-center flex flex-col items-start transition-all translate-x-0 lg:w-auto lg:px-3 px-6 lg:relative absolute lg:top-0 lg:left-0 top-[80px] -left-[0] z-50 bg-black pb-5 ease-in-out "
                : "w-full lg:flex flex-grow items-center lg:w-auto lg:px-3 px-6 transition-all lg:relative absolute lg:top-0 lg:left-0 top-[80px] -left-[110%] ease-in-out gap-9 translate-x-[-10rem] md:translate-x-0 lg:translate-y-0"
            }
          >
            <ul className="flex gap-6 font-semibold justify-between    items-start lg:m-0 mt-5 lg:flex-row flex-col">
              <li className="font-primary font-normal text-xs leading-[0.09em] text-white cursor-pointer my-3">
                THE DIFFERENCE
              </li>
              <li className="font-primary font-normal text-xs leading-[0.09em] text-white cursor-pointer my-3">
                FEATURES + BENEFITS
              </li>
              <li className="font-primary font-normal text-xs leading-[0.09em] text-white cursor-pointer my-3">
                TESTIMONIALS
              </li>
              <li className="font-primary font-normal text-xs leading-[0.09em] text-white cursor-pointer my-3">
                APPLY NOW
              </li>
            </ul>

            <button className="bg-white border border-black w-[150px] font-primary font-bold text-[11px] leading-[24px] tracking-[0.095em] text-black py-[6px] lg:m-0 mt-10">
              BOOK A DEMO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
