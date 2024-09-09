import React, { useState, Suspense } from "react";
import Tabs from "./Components/Tabs/Tabs.js";
import "./App.css";
import Accordion from "./Components/accordion/accordion";
import QRCodeGenerator from "./Components/qr-code-generator";
import Slider from "./Components/slider/slider";
import Stopwatch from "./Components/stopwatch";
import TreeView from "./Components/treeview";
import { menuList } from "./Components/treeview/menu";
import Counter from "./Components/counter.js";

const Photos = React.lazy(() => import("./Components/Tabs/Photos.js"));
const Comments = React.lazy(() => import("./Components/Tabs/Comments.js"));

export default function App() {
  const [tab, setTab] = useState("photos");

  const handleChange = (tab: string) => {
    //startTransition(() => {
    setTab(tab);
    //});
  };

  return (
    <div>
      <div className="app">
        <Counter />
        <Accordion />
        <Stopwatch />
        <Slider />
        <TreeView menuList={menuList} />
        <QRCodeGenerator />
      </div>
      <Tabs onTabSelect={handleChange} />
      <Suspense fallback={<>{"...loading"}</>}>
        {tab === "photos" ? <Photos /> : <Comments />}
      </Suspense>
    </div>
  );
}
