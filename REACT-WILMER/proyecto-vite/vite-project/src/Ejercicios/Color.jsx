import React from 'react';

const Color = ({ id, name }) => {
  return <li key={id}>{name}</li>;
};

export default Color;
