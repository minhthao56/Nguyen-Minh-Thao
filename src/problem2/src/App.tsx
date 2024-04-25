import { ModeToggle } from "./components/mode-toggle";
import { H4 } from "./components/h4";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";

function App() {
  return (
    <>
      <div className="w-full flex justify-around items-center border-b-2 py-2">
        <H4>Logo</H4>
        <ModeToggle />
      </div>
      <Label htmlFor="amount-to-send">Amount to send</Label>
      <Input type="text" id="amount-to-send" placeholder="Amount to send" />
    </>
  );
}

export default App;
