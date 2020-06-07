//like checkbox for prices
//within fragment cna have multiple elements (like div)

import React, {useState, useEffect, Fragment } from 'react';

const RadioBox = ({prices, handleFilters}) => {
  const [value, setValue] = useState(0)

  const handleChange = (event) => {
    handleFilters(event.target.value);
    setValue(event.target.value);
  };

  return prices.map((p, i) => (
    <div key={i}>
      <input
        onChange={handleChange}
        value={`${p._id}`}
        name={p} //this means you can only select one at a time
        type="radio"
        className="mr-2 ml-4"/>
      <label className="form-check-label">{p.name}</label>
    </div>
  ));
};

export default RadioBox;
