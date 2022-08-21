import React from 'react';

const Child = ({ remainingValues }) => {
  console.log("remainingValues CHILD", remainingValues);
  return (
    <>
      <h1>Child Component</h1>
      <h3>Array: 1, 2, 3, 4, 5, 6 </h3>
      <h3>Remaining Values: {remainingValues}  </h3>
    </>
  )
}

export default Child;