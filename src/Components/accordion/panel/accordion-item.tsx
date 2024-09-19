import { useContext } from "react";
import "./accordion-item.style.css";
import { AccordionContext } from "../context";

type Props = {
  children: React.ReactNode;
  index: string;
};

const AccordionItem = ({ index, children }: Props) => {
  const { toggle, openIndex } = useContext(AccordionContext);

  return (
    <div className="panel">
      <div className="panelHeading">
        <button className="btn" onClick={() => toggle(index)}>
          {openIndex === index ? "-" : "+"}
        </button>
      </div>
      <hr />
      <div className={openIndex === index ? "panelBody" : "panelBody hide"}>
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
