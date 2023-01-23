export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "d009bab2e3mshecc8f6ccb9292e6p100349jsn853191c7ec73",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
