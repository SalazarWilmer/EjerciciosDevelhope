import React, { useState } from "react";
import "../styles/index.scss";

const Container = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`container-co ${isCollapsed ? "collapsed" : ""}`}>
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleToggleCollapse}
      >
        {title && <h2 className="text-xl mb-4">{title}</h2>}
        <span>{isCollapsed ? "▼" : "▲"}</span>
      </div>
      {!isCollapsed && children}
    </div>
  );
};

export default Container;
