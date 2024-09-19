import React from "react";

export const AccordionContext = React.createContext<contextType>({
  toggle: (a:string) => {},
  openIndex: null,
});

type contextType = {
  toggle: (index: string) => void;
  openIndex: string | null;
};
