// components/ThemeSwitch/theme_switch.js

import React, { useContext } from 'react';
import { Switch } from '@patternfly/react-core';
import { ThemeContext } from '../../theme-context';
import './theme_switch.css'; // Import the CSS file

const ThemeSwitch = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <Switch
      id="dark-mode-switch"
      label="Dark Mode"
      labelOff="Light Mode"
      isChecked={isDarkMode}
      onChange={handleToggle}
      className={`custom-switch ${isDarkMode ? 'dark' : 'light'}`} // Apply theme classes
    />
  );
};

export default ThemeSwitch;
