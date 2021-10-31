import React from 'react';

const Card = ({ bgColor }) => {
  return (
    <span
      className={`xl:w-8 xl:h-8 lg:w-10 lg:h-10 w-5 h-5 bg-${bgColor}`}
    ></span>
  );
};

export default Card;
