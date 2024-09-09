import { useState } from "react";
import { MenuItem } from "./menu";
import MenuListNav from "./menu-list";
import "./menu.style.css";

type Props = {
  item: MenuItem;
};

const Item = ({ item }: Props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <ul>
      <li>
        <label htmlFor={item.label} className="label">
          {item.label}
        </label>
        {item.children && (
          <button
            id={item.label}
            className="togglebutton btn"
            onClick={handleClick}
          >
            {active ? <> -</> : <>+</>}
          </button>
        )}
      </li>

      {active && item.children && item.children.length > 0 && (
        <MenuListNav menuList={item?.children || []} />
      )}
    </ul>
  );
};

export default Item;
