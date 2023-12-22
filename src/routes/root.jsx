import { Link, Outlet } from "react-router-dom";
import {
  Navbar, Nav,
  NavbarBrand, NavItem
} from 'reactstrap';

export default function Root() {
  const links = [
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
      <Navbar fixed="top" color="secondary" light expand="md" className="border-bottom border-gray bg-white">
        <NavbarBrand>Movie App</NavbarBrand>
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
