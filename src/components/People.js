import React from 'react';

const People = ({name, height, gender}) => {
  return (
      <>
        <h2>Name: </h2>
        <p>{name}</p>
        <h2>Height: </h2>
        <p>{height}</p>
        <h2>Gender: </h2>
        <p>{gender}</p>
      </>
  );
}

export default People;