import React from 'react';

const Counter = ({addId, reduceId, id}) => {
  return (
      <>
        <button onClick={addId}>+</button>
        <p>{id}</p>
        <button onClick={reduceId}>-</button>
      </>
  );
}

export default Counter;