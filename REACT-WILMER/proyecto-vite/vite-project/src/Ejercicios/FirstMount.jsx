import React, { useEffect, useRef } from "react";

const FirstMount = () => {
  const isMountRef = useRef(false);

useEffect(() => {
  if (!isMountRef.current) {
    console.log("El componente se ha montado por primera vez");
    isMountRef.current = true;
  }
}, []);

return (
  <div>
    <p>Ejercicio 51 ref</p>
  </div>
);
};
export default FirstMount;
