import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { FormattedMessage } from "react-intl";

import es from "../../assets/es.svg";
import gb from "../../assets/gb.svg";

function Header() {
  const [showFixed, setShowFixed] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const prevTheme = localStorage.getItem("theme");
    if (prevTheme) {
      setTheme(prevTheme);
    }
  });

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  useEffect(() => {
    const onScroll = (e) => {
      const newScroll = window.scrollY > 5;
      showFixed !== newScroll && setShowFixed(newScroll);
    };

    document.addEventListener(`scroll`, onScroll);
    return () => document.removeEventListener(`scroll`, onScroll);
  });
  return (
    <>
      <div
        className={`navbar justify-end pr-4 text-primary-content fixed ${
          showFixed &&
          "transition text-base-content duration-150 bg-base-200 z-10"
        }`}
      >
        <div className="flex-1 pl-4">
          <button
            data-set-theme="dark"
            data-act-class="ACTIVECLASS"
            onClick={() => setTheme("dark")}
            className={`transition duration-300 ${
              theme === "dark" ? "hidden" : ""
            }`}
          >
            <svg
              className="fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          </button>
          <button
            data-set-theme="light"
            data-act-class="ACTIVECLASS"
            onClick={() => setTheme("light")}
            className={`transition duration-300 ${
              theme === "light" ? "hidden" : ""
            }`}
          >
            <svg
              className="fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </button>
          {/* )} */}
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 font-bold">
            <li>
              <a
                href="#Introduction"
                className={`${showFixed && "hover:bg-base-100"}`}
              >
                <FormattedMessage id="header.home" defaultMessage="HOME" />
              </a>
            </li>
            <li>
              <a
                href="#About"
                className={`${showFixed && "hover:bg-base-100"}`}
              >
                <FormattedMessage id="header.about" defaultMessage="ABOUT" />
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className={`${showFixed && "hover:bg-base-100"}`}
              >
                <FormattedMessage
                  id="header.projects"
                  defaultMessage="PROJECTS"
                />
              </a>
            </li>
            <li>
              <a
                href="#References"
                className={`${showFixed && "hover:bg-base-100"}`}
              >
                <FormattedMessage
                  id="header.references"
                  defaultMessage="REFERENCES"
                />
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className={`${showFixed && "hover:bg-base-100"}`}
              >
                <FormattedMessage
                  id="header.contact"
                  defaultMessage="CONTACT"
                />
              </a>
            </li>
          </ul>
          <div className="dropdown dropdown-end ">
            <label
              tabIndex={0}
              className={`btn text-base bg-inherit border-0 text-primary-content m-1 font-bold px-4 ${
                showFixed &&
                "transition text-base-content duration-300 bg-base-200 z-10 hover:bg-base-100"
              }`}
            >
              <FormattedMessage id="header.lang" defaultMessage="LANG" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-200 rounded w-full"
            >
              <li className="border-b border-base-100">
                <img src={gb} className="active:bg-inherit" />
              </li>
              <li>
                <img src={es} className="active:bg-inherit" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export { Header };
