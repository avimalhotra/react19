import { useState, useEffect } from "react";

export default function Example() {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("asc");

  async function fetchApi() {
    const url = "https://jsonplaceholder.typicode.com/users";

    try {
      const res = await fetch(url);
      const res2 = await res.json();
      setData(res2);
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  function sortData(x = "id", y = sort) {
    setSort(y === "asc" ? "desc" : "asc");

    data.sort((a, b) => {
      if (a[x] > b[x]) {
        return y === "asc" ? 1 : -1;
      } else {
        return y === "asc" ? -1 : 1;
      }
    });
    setData([...data]);
  }

  return (
    <>
      <h2>API Example</h2>

      <table className="table">
        <thead>
          <tr>
            <th>S No</th>
            <th>
              Id{" "}
              <button className="btn" onClick={() => sortData("id")}>
                ↕
              </button>
            </th>
            <th>
              Name{" "}
              <button className="btn" onClick={() => sortData("name")}>
                ↕
              </button>
            </th>
            <th>
              UserName{" "}
              <button className="btn" onClick={() => sortData("username")}>
                ↕
              </button>
            </th>
            <th>Phone</th>
            <th>E Mail</th>
            <th>Website</th>
            <th>Company</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{elem.id}</td>
              <td>{elem.name}</td>
              <td>{elem.username}</td>
              <td>{elem.phone}</td>
              <td>{elem.email}</td>
              <td>
                <a href={`https://${elem.website}`} target="_blank">
                  {elem.website}
                </a>
              </td>
              <td>{elem.company.name}</td>
              <td>
                {}
                {elem.address.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
