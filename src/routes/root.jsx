import { Link, Outlet } from "react-router-dom";
import {
  Navbar, Nav,
  NavbarBrand, NavItem
} from 'reactstrap';

export default function Root() {
  const links = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Movies",
      path: "/movies",
    },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <NavItem key={link.path}>
        <Link to={link.path} className="nav-link">
          {link.label}
        </Link>
      </NavItem>
    );
  });

  return (
    <>
      <Navbar fixed="top" color="light" light expand="md" className="border-bottom border-gray bg-white">
        <NavbarBrand href="/">Movie App</NavbarBrand>
        <Nav className="mr-auto" navbar>
          {renderedLinks}
        </Nav>
      </Navbar>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
