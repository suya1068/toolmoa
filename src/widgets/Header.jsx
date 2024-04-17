import { Link } from "@remix-run/react";
// import logo from "../asset/toolmoa_logo.png";
import { generateMenu } from "../shared/utils/utils.jsx";

export default function Header() {
  return (
    <header className="tool-moa__header">
      <div className="tool-moa__header__logo">
        <Link to="/">툴모아</Link>
      </div>
      <div className="tool-moa__header__menu">
        <ul className="menu_box">{generateMenu()}</ul>
      </div>
    </header>
  );
}
