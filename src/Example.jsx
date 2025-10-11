import { useState } from "react";

export function Example() {
  function sayHi(name) {
    console.log(`Hello ${name}`);
  }

  const [email, setEmail] = useState("");
  const [range, setRange] = useState(0);
  const [city, setCity] = useState("");

  function changeEmail(email) {
    setEmail(email);
  }

  function sendData(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function changeRange(range) {
    setRange(range);
  }

  function changeCity(city) {
    setCity(city);
  }

  return (
    <>
      <h2>Examples</h2>
      {/* <button className="btn" onClick={sayHi}>Hello</button> */}
      {/* <button className="btn" onClick={() => sayHi("Avi")}>Hello</button> */}
      <form onSubmit={sendData}>
        <label>
          Email:{" "}
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            onInput={(e) => changeEmail(e.target.value)}
            required
          />
        </label>
        <output>{email}</output>
        <label>
          Password:{" "}
          <input className="input" type="password" name="pass" required />
        </label>
        <button className="btn">Login</button>
      </form>
      <label>
        Range:{" "}
        <input
          type="range"
          min={0}
          max={100}
          value={range}
          onChange={(e) => changeRange(e.target.value)}
        />
      </label>
      <output>{range}</output>
      <hr />
      <label>
        City:
        <select onChange={(e) => changeCity(e.target.value)}>
          <option selected disabled value="">
            --Change City--
          </option>
          <option>New Delhi</option>
          <option>Chennai</option>
        </select>{" "}
      </label>{" "}
      <output>City: {city}</output>
    </>
  );
}
