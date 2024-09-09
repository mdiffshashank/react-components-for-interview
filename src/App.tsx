import Tabs from "./Components/Tabs/Tabs.js";
import "./App.css";
import Accordion from "./Components/accordion/accordion";
import QRCodeGenerator from "./Components/qr-code-generator";
import Slider from "./Components/slider/slider";
import Stopwatch from "./Components/stopwatch";
import TreeView from "./Components/treeview";
import { menuList } from "./Components/treeview/menu";
import Counter from "./Components/counter.js";

export default function App() {
  return (
    <div>
      <div className="app">
        <Counter />
        <Accordion />
        <Stopwatch />
        <Slider />
        <TreeView menuList={menuList} />
        <QRCodeGenerator />
        <Tabs />
      </div>
    </div>
  );
}
