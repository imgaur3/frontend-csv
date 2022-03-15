//========================= get all=============
const APIURL = "http://localhost:8000/testApi";

//=============================================================

export const getScores = async () => {
  const response = await fetch(APIURL + "getscore");
  const data = await response.json();
  return data;
};

export const getbatting = async () => {
  const response = await fetch(APIURL + "getbatting");
  const data = await response.json();
  console.log(data);
  return data;
};

export const getfielding = async () => {
  const response = await fetch(APIURL + "getfielding");
  const data = await response.json();
  return data;
};
