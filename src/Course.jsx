import Button from "./Button";
import Input from "./Input";
import Image from "./Image";

export default function Course() {
  return (
    <section>
      <h2>Course Component</h2>
      <Image src="vite.svg" alt="vite logo" width={32} height={32} />
      <Image
        src="react.svg"
        alt="react logo"
        width={32}
        height={32}
        load="lazy"
      />
      <p>Para</p>
      <p>Para</p>
      <label>
        Name: <Input id="name" name="username" maxlength={15} />
      </label>
      <label>
        Age: <Input type="number" id="age" name="userage" min="18" max="25" />
      </label>
      <Button label="Login" />
      <Button label="Sign Up" />
    </section>
  );
}
