import React from "react";
import { useTheme } from "../hooks/useTheme";

export const Toggle = () => {
  const [theme, handleChange] = useTheme("dark");

  return (
    <div className="container-switch">
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleChange}
          /*   onChange={() => handleChange}*/
          checked={theme === "dark"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Toggle;
