import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';

const Hook = () => {
  const [counter, setCounter] = useState(10);
  // const [status, setStatus] = useState('Pair');

  // useEffect(() => {
  //   counter % 2 === 0 ? setStatus('Pair') : setStatus('Odd');
  // });

  return (
    <>
      <div>{counter}</div>
      {/* <div>{status}</div> */}
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Inc
      </button>
      <button type="button" onClick={() => setCounter(counter - 1)}>
        Dec
      </button>
    </>
  );
};

export default Hook;
