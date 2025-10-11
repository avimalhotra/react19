import { useState } from "react";

export default function Course() {
  const [user, setUser] = useState({ name: "", phone: "" });
  const [nums, setNums] = useState([1, 2, 3, 4, 5, 6]);

  // console.log(nums);

  function changeNums() {
    setNums([...nums, nums.length + 1]);
  }

  function filterData() {
    setNums(nums.filter((i) => i % 2 == 0));
  }
  function doubleData() {
    setNums(nums.map((i) => i * 2));
  }

  function changeName(name) {
    setUser({ ...user, name });
  }
  function changePhone(phone) {
    setUser({ ...user, phone });
  }

  return (
    <section>
      <h2>Course Component</h2>
      <form>
        <label>
          Name:{" "}
          <input
            className="input"
            type="text"
            required
            value={user.name}
            onInput={(e) => changeName(e.target.value)}
          />
        </label>
        <label>
          Phone:{" "}
          <input
            className="input"
            type="tel"
            required
            value={user.phone}
            onInput={(e) => changePhone(e.target.value)}
          />
        </label>

        <button className="btn">Sign up</button>
      </form>
      <p>Name: {user.name}</p>
      <p>Phone: {user.phone}</p>
      <hr />
      <button className="btn" onClick={changeNums}>
        Add
      </button>
      <button className="btn" onClick={filterData}>
        Filter
      </button>
      <button className="btn" onClick={doubleData}>
        Double
      </button>
      <p>{nums}</p>
    </section>
  );
}
