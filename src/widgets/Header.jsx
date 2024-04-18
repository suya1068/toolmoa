import { Link } from "@remix-run/react";
import { generateMenu } from "../shared/utils/utils.jsx";
import logo from "/toolmoa_logo.png";

export default function Header() {
  return (
    <header className="tool-moa__header">
      <div className="tool-moa__logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="tool-moa__header__menu">
        <ul className="menu_box">{generateMenu()}</ul>
      </div>
    </header>
  );
}
