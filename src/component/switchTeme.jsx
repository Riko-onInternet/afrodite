
import { LuSun } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";

import { useState } from "react";

function SwitchTheme() {

  const html = document.querySelector("html");
  const [theme, setTheme] = useState("light");

  function themeSetLight() {
    if (html) {
      html.classList.remove("dark");
    }
  }
  function themeSetDark() {
    if (html) {
      html.classList.add("dark");
    }
  }

  return (
    <>
      {
        {
          light: (
            <button
              type="button"
              className="relative flex-shrink-0 rounded-full p-2 bg-transparent text-black dark:text-white"
              onClick={() => {
                themeSetDark(), setTheme("dark");
              }}
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Toggle dark</span>
              <LuSun className="w-6 h-6" />
            </button>
          ),

          dark: (
            <button
              type="button"
              className="relative flex-shrink-0 rounded-full p-2 bg-transparent text-black dark:text-white"
              onClick={() => {
                themeSetLight(), setTheme("light");
              }}
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Toggle light</span>
              <FiMoon className="w-6 h-6" />
            </button>
          ),
        }[theme]
      }
    </>
  )
}

export default SwitchTheme;