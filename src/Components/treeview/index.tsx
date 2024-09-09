import Card from "../card/card";
import { MenuList } from "./menu";
import MenuListNav from "./menu-list";
import "./menu.style.css";

type Props = {
  menuList: MenuList;
};

const TreeView = ({ menuList }: Props) => {
  return (
    <Card>
      <div className="wrapper">
        <h4>5- TreeView</h4>
        <MenuListNav menuList={menuList} />
      </div>
    </Card>
  );
};

export default TreeView;
