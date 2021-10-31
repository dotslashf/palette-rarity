import React from 'react';

const Card = ({ bgColor }) => {
  return <span className={`w-8 h-8 bg-${bgColor}`}></span>;
};

export default Card;
