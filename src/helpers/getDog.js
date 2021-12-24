import React from "react";

const getDog = async (breedId) => {
  let url;
  if (!breedId || breedId === 0) {
    url = "https://api.thedogapi.com/v1/images/search";
  } else {
    url = "https://api.thedogapi.com/v1/images/search?breed_id=" + breedId;
  }

  const response = await fetch(url);
  if (!response.ok) {
    const { url, status, statusText } = response;
    throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
  }
  const [data] = await response.json();
  let {
    url: image,
    breeds: [breed],
  } = data;

  if (!breed) {
    breed = {
      id: 0,
      name: "random",
    };
  }
  const dog = {
    image,
    breed: breed,
  };
  return dog;
};

export default getDog;
