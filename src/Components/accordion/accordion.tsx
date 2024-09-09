import Card from "../card/card";
import Panel from "./panel/panel";

const Accordion = () => {
  return (
    <Card>
      <h4>2- Accordion</h4>

      <Panel heading="Panel 1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed est
          voluptates at tempora temporibus maiores, atque quas impedit ut nulla
          alias repellendus voluptatum ipsam quod ipsa, quos corporis.
          Recusandae incidunt suscipit cumque culpa minima eius veniam velit!
          Odio officiis atque consequuntur.
        </p>
      </Panel>

      <Panel heading={"Panel 2"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed est
          voluptates
        </p>
      </Panel>
    </Card>
  );
};

export default Accordion;
