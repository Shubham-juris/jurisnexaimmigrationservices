import React, { useEffect, useState } from "react";
import Icon from "../../assets/Logo/Icon.gif";
const CursorIcon= () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
    <div className="relative">
      <img
        src={Icon}
        alt="cursor gif"
        className="fixed z-50 w-18 h-18 pointer-events-none"
        style={{
          left: position.x + 10,
          top: position.y + 10,
        }}
      />
    </div>
  );
};

export default CursorIcon;
