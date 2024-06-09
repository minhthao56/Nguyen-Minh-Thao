import { H4 } from "./h4";
import { ModeToggle } from "./mode-toggle";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="w-full flex justify-around items-center border-b-2 py-2">
      <H4>Swap</H4>
      <div>
        <NavLink to="/" className="mr-4">
          Home
        </NavLink>
        <NavLink to="/chart">Chart</NavLink>
        <NavLink to="/market" className="ml-4"> Market</NavLink>
        <NavLink to="/overview" className="ml-4">Overview</NavLink>
      </div>
      <ModeToggle />
    </div>
  );
}
