import { useContext } from "react";
import Button from "../components/Button";
import { Context } from "../components/Context";
export default function Home() {
  const ctx = useContext(Context);
  return (
    <div>
      <p>{ctx}</p>
      <Button label={"hello World"} disabled={true} />
    </div>
  );
}
