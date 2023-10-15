import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    console.log('Componente Clock montado');

    const updateClock = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => {
      clearInterval(intervalId);
      console.log('Componente Clock desmontado');
    };
  }, [language]);


  const getTimeInLanguage = () => {
    const options = { hour12: true, hour: '2-digit', minute: '2-digit' };

    if (language === 'es') {
      return 'Hola Actual: ' + currentTime.toLocaleTimeString('es-ES', options);
    } else {
      return 'Current Time: ' + currentTime.toLocaleTimeString('en-US', options);
    }
  };

  return (
    <div className="clock-container">
      <h2>{getTimeInLanguage()}</h2>
    </div>
  );
};

export default Clock;
