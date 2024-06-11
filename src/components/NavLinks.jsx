import { NavLink } from "react-router-dom";

const NavLinks = ({ color, weight, onClick }) => {
  return (
    <>
      <li>
        <NavLink
          onClick={onClick}
          to="/"
          className={`hover:${color} hover:${weight} transition-all tracking-wider`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={onClick}
          to="/services"
          className={`hover:${color} hover:${weight} transition-all tracking-wider`}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={onClick}
          to="/doctors"
          className={`hover:${color} hover:${weight} transition-all tracking-wider`}
        >
          Our doctors
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={onClick}
          to="/contact"
          className={`hover:${color} hover:${weight} transition-all tracking-wider`}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={onClick}
          to="/contact"
          className={`hover:${color} hover:${weight} transition-all tracking-wider`}
        >
          My appointments
        </NavLink>
      </li>
      <li>Ai Health</li>
    </>
  );
};

export default NavLinks;
