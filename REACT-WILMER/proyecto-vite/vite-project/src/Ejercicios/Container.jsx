import React from "react";
import "../styles/index.scss"

const Container = ({ title, children }) => {
    return (
      <div className="container-co">
        {title && <h2 className="text-xl mb-4">{title}</h2>}
        {children}
      </div>
    );
  };
  
export default Container;
