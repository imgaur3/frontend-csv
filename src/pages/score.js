import React, { useState, useContext, useEffect } from "react";
import Search from "../components/Search";
import { getScores } from "../api";

const Score = () => {
  const [scores, setscore] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(async () => {
    const result = await getScores();
    console.log("result ", result);
    setscore(result);
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filterscores = scores.filter((score) => {
    return score.wickets
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  const score = filterscores.map((data) => {
    const { wickets, catches, stumps, opposition, ground, date, toss } = data;
    return (
      <tr>
        <td>{wickets}</td>
        <td>{catches}</td>
        <td>{stumps}</td>
        <td>{opposition}</td>
        <td>{ground}</td>
        <td>{date}</td>
        <td>{toss}</td>
      </tr>
    );
  });

  return (
    <div>
      <div className="container my-5">
        <h1>Score</h1>
        <div className="d-flex justify-content-between py-3">
          <p>Total - {scores.length}</p>
          <Search searchchange={handleSearch} />
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Wickets</th>
              <th>Catches</th>
              <th>Stumps</th>
              <th>Opposition</th>
              <th>Ground</th>
              <th>Date</th>
              <th>Toss</th>
            </tr>
          </thead>
          <tbody>{score}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Score;
