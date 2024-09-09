import { useState } from "react";
import "./panel.style.css";

type Props = {
  heading: string;
  children: React.ReactNode;
};

const Panel = ({ heading, children }: Props) => {
  const [open, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!open);
  };

  return (
    <div className="panel">
      <div className="panelHeading">
        <h3>{heading}</h3>
        <button className="btn" onClick={handleClick}>
          {open ? "-" : "+"}
        </button>
      </div>
      <hr />
      <div className={open ? "panelBody" : "panelBody hide"}>{children}</div>
    </div>
  );
};

export default Panel;
