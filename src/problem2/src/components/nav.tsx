import { H4 } from "./h4";
import { ModeToggle } from "./mode-toggle";

export default function Nav() {
  return (
    <div className="w-full flex justify-around items-center border-b-2 py-2">
      <H4>Swap</H4>
      <ModeToggle />
    </div>
  );
}
