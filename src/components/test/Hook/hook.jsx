import React, { useState } from 'react';
import PropType from 'prop-types';
// import React, { useState, useEffect } from 'react';

const Hook = ({ name }) => {
  const [counter, setCounter] = useState(10);
  const [text, setText] = useState(name);
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
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
    </>
  );
};

Hook.defaultProps = {
  name: '',
};

Hook.propTypes = {
  name: PropType.string,
};

export default Hook;
