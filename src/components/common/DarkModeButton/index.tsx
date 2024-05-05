import { DarkMode, LightMode } from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { onDarkModeChange, useDarkModeSelector } from "../../../redux/darkMode";

interface DarkModeButtonProps {
  isDashboard?: boolean;
}

const DarkModeButton = ({ isDashboard }: DarkModeButtonProps) => {
  const darkMode = useDarkModeSelector();
  const dispatch = useDispatch();

  const handleDarkModeChange = () => {
    dispatch(onDarkModeChange(!darkMode));
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (darkMode == true) html?.classList.add("dark");
    else html?.classList.remove("dark");
  }, [darkMode]);

  return (
    <button
      onClick={handleDarkModeChange}
      className={`w-[48px] h-[48px] bg-white dark:bg-gray-800 rounded-full outline-none ${
        darkMode === true ? "" : ""
      } ${isDashboard && "!bg-dashboardDarkMode mt-4"}`}
    >
      {darkMode === true ? (
        <DarkMode />
      ) : (
        <LightMode
          className={isDashboard ? "text-dashboardDarkModeLightModeIcon" : ""}
        />
      )}
    </button>
  );
};

export { DarkModeButton };
