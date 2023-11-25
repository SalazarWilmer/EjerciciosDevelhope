import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageSelector = () => {
  const { changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <select onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  );
};

export default LanguageSelector;
