import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <Navbar fluid className="absolute min-w-full">
      <Navbar.Toggle />


      <Navbar.Collapse>
        <NavLink to="/"><h2>Home</h2></NavLink>
        <NavLink><h2>Rules</h2></NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarComponent;
