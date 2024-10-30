import React from 'react';

const CustomTitle = ({ data }) => {
  return (
    <div
      style={{
        fontSize: 10,
        color: '#878787',
        marginTop: 5,
      }}
    >
      {data.label}
    </div>
  );
};

export default CustomTitle;
