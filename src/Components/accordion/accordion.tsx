import { useState } from "react";
import Card from "../card/card";
import AccordionItem from "./panel/accordion-item";
import { AccordionContext } from "./context";
import "./accordion.style.css";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<null | string>(null);

  const toggle = (index: string) => {
    setOpenIndex((openIndex: string | null) => {
      return openIndex !== null && openIndex === index ? "null" : index;
    });
  };

  return (
    <Card>
      <div className="accordion">
        <AccordionContext.Provider value={{ openIndex, toggle }}>
          <h4>2- Accordion</h4>

          <AccordionItem index={"1"}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed est
              voluptates at tempora temporibus maiores, atque quas impedit ut
              nulla alias repellendus voluptatum ipsam quod ipsa, quos corporis.
              Recusandae incidunt suscipit cumque culpa minima eius veniam
              velit! Odio officiis atque consequuntur.
            </p>
          </AccordionItem>

          <AccordionItem index={"2"}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed est
              voluptates
            </p>
          </AccordionItem>
          <AccordionItem index={"3"}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed est
              voluptates
            </p>
          </AccordionItem>
          <AccordionItem index={"4"}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed est
              voluptates
            </p>
          </AccordionItem>
        </AccordionContext.Provider>
      </div>
    </Card>
  );
};

export default Accordion;
