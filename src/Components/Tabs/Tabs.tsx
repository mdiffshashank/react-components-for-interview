import { Suspense, useState } from "react";
import React from "react";
import Card from "../card/card";

const Photos = React.lazy(() => import("./Comments.js"));
const Comments = React.lazy(() => import("./Photos.js"));

function Tabs() {
  const [tab, setTab] = useState("photos");

  const handleChange = (tab: string) => {
    //startTransition(() => {
    setTab(tab);
    //});
  };

  return (
    <Card>
      <div>
        <span
          style={{
            borderBottom: `${tab === "photos" ? "2px solid navy" : "none"} `,
            cursor: "pointer",
          }}
          onClick={() => handleChange("photos")}
        >
          Photos
        </span>{" "}
        &nbsp;
        <span
          style={{
            borderBottom: `${tab === "comments" ? "2px solid navy" : "none"} `,
            cursor: "pointer",
          }}
          onClick={() => handleChange("comments")}
        >
          Comments
        </span>
      </div>

      <Suspense fallback={<>{"...loading"}</>}>
        {tab === "photos" ? <Photos /> : <Comments />}
      </Suspense>
    </Card>
  );
}

export default Tabs;
