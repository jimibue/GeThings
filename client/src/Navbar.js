import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu>
      <Link to="/">
        <Menu.Item>Home</Menu.Item>
      </Link>
      <Link to="/ges">
        <Menu.Item>Ges</Menu.Item>
      </Link>
      <Link to="/about">
        <Menu.Item>About</Menu.Item>
      </Link>
      <Link to="/cats">
        <Menu.Item>Cats</Menu.Item>
      </Link>
    </Menu>
  );
};

export default NavBar;
