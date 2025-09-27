const version = 19;
import Button from "./Button";
export default function Header() {
  return (
    <header>
      <h1>Hello React {version}</h1>
      <Button label="Menu" />
    </header>
  );
}
