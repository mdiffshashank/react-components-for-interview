function Tabs({ onTabSelect }: { onTabSelect: (a: string) => void }) {
  return (
    <div>
      <span onClick={() => onTabSelect("photos")}>Photos</span> &nbsp;
      <span onClick={() => onTabSelect("comments")}>Comments</span>
    </div>
  );
}

export default Tabs;
