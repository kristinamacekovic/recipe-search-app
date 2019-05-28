import config from "../config";

const getRecipes = async searchTerm => {
  const res = await fetch(
    `https://www.food2fork.com/api/search?key=${config.apiKey}&q=${searchTerm}`
  );
  const jsonRes = await res.json();
  return jsonRes;
};

export { getRecipes };
