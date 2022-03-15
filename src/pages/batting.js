import React, { useState, useContext, useEffect } from "react";
import Search from "../components/Search";
import { getbatting } from "../api";

const Batting = () => {
  const [battings, setbatting] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(async () => {
    const result = await getbatting();
    console.log("result ", result);
    setbatting(result);
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filterbattings = battings.filter((batting) => {
    return batting.runs
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  const batting = filterbattings.map((data) => {
    const {
      _id,
      bf,
      fs,
      ground,
      inns,
      opposition,
      matchNumber,
      dismissal,
      mins,
      pos,
      result,
      runs,
      ss,
      sr,
      startDateAscending,
    } = data;
    return (
      <tr key={_id}>
        <td>{runs}</td>
        <td>{mins}</td>
        <td>{bf}</td>
        <td>{fs}</td>
        <td>{ss}</td>
        <td>{sr}</td>
        <td>{pos}</td>
        <td>{dismissal}</td>
        <td>{inns}</td>
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
        <h1>Batting</h1>
        <div className="d-flex justify-content-between py-3">
          <p>Total - {battings.length}</p>
          <Search searchchange={handleSearch} />
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>runs</th>
              <th>mins</th>
              <th>bf</th>
              <th>fs</th>
              <th>ss</th>
              <th>sr</th>
              <th>pos</th>
              <th>dismissal</th>
              <th>inns</th>
              <th>opposition</th>
              <th>ground</th>
              <th>startDateAscending</th>
              <th>matchNumber</th>
              <th>result</th>
            </tr>
          </thead>
          <tbody>{batting}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Batting;
