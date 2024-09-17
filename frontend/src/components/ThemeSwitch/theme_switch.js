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
    <div className={`theme-switch-container ${isDarkMode ? 'dark' : 'light'}`}>
      <span className="switch-label">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
      <Switch
        id="dark-mode-switch"
        isChecked={isDarkMode}
        onChange={handleToggle}
        className="custom-switch"
      />
    </div>
  );
};

export default ThemeSwitch;
