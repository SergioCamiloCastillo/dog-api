import React from "react";

export default function Card({ dog, updateDog, loading }) {
  if(loading){
      return <h1>Loading.....</h1>
  }
  return (
    <div className="card" onClick={() => updateDog(dog.breed.id)}>
      <img src={dog?.image} alt="dog" />
      <p>{dog.breed?.name}</p>
    </div>
  );
}
