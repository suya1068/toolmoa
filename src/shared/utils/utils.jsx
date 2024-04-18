import { Link } from "@remix-run/react";
import pages from "../links.json";

function generateMenu() {
  const menus = pages.menus;

  const result = menus.map((menu, idx) => {
    return (
      <li key={`menu-${idx}`}>
        <Link to={menu.page}>{menu.title}</Link>
      </li>
    );
  });

  return result;
}

export { generateMenu };
