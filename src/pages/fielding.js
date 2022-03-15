import React, { useState, useContext, useEffect } from "react";
import Search from "../components/Search";
import { getfielding } from "../api";

const Fielding = () => {
  const [fieldings, setfielding] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(async () => {
    const result = await getfielding();
    console.log("result ", result);
    setfielding(result);
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filterfieldings = fieldings.filter((fielding) => {
    return fielding.runs
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  const fielding = filterfieldings.map((data) => {
    const {
      _id,
      dismisalMade,
      econ,
      ground,
      inns,
      wkts,
      opposition,
      matchNumber,
      mdns,
      overs,
      pos,
      catchTaken,
      result,
      runs,
      startDateAscending,
    } = data;
    return (
      <tr key={_id}>
        <td>{overs}</td>
        <td>{mdns}</td>
        <td>{runs}</td>
        <td>{wkts}</td>
        <td>{econ}</td>
        <td>{pos}</td>
        <td>{inns}</td>
        <td>{dismisalMade}</td>
        <td>{catchTaken}</td>
        <td>{opposition}</td>
        <td>{ground}</td>
        <td>{startDateAscending}</td>
        <td>{matchNumber}</td>
        <td>{result}</td>
      </tr>
    );
  });

  return (
    <div>
      <div className="container my-5">
        <h1>Fielding</h1>
        <div className="d-flex justify-content-between py-3">
          <p>Total - {fieldings.length}</p>
          <Search searchchange={handleSearch} />
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td> overs </td>
              <td> mdns </td>
              <td> runs </td>
              <td> wkts </td>
              <td> econ </td>
              <td> pos </td>
              <td> inns </td>
              <td> dismisalMade </td>
              <td> catchTaken </td>
              <td> opposition </td>
              <td> ground </td>
              <td> startDateAscending </td>
              <td> matchNumber </td>
              <td> result </td>
            </tr>
          </thead>
          <tbody>{fielding}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Fielding;
