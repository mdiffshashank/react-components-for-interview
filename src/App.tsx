import React, { useState, Suspense, startTransition } from "react";
import Tabs from "./Components/Tabs.js";

const Photos = React.lazy(() => import("./Components/Photos.js"));
const Comments = React.lazy(() => import("./Components/Comments.js"));

export default function App() {
  const [tab, setTab] = useState("photos");

  const handleChange = (tab: string) => {
    //startTransition(() => {
    setTab(tab);
    //});
  };

  return (
    <div>
      <Tabs onTabSelect={handleChange} />

      <Suspense fallback={<>{"...loading"}</>}>
        {tab === "photos" ? <Photos /> : <Comments />}
      </Suspense>
    </div>
  );
}
