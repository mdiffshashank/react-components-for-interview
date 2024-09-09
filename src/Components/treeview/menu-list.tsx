import { MenuList } from "./menu";
import Item from "./menuItem";

type Props = {
  menuList: MenuList;
};

const MenuListNav = ({ menuList }: Props) => {
  return (
    <div>
      {menuList.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

export default MenuListNav;
