import React, { useState } from 'react';
import Card from './Card';

const Cards = () => {
  const arr = [...Array(144).keys()];

  const paletteList = [
    'sugar-candy',
    'windy-sunset',
    'pink-sky',
    'rainbow-cream',
    'summer-cream',
    'muted-beach',
    'dazzling-jungle',
    'cheerish-pink',
    'comfy-autumn',
  ];
  const [palette, setPalette] = useState(
    paletteList[Math.floor(Math.random() * paletteList.length)]
  );

  const setPaletteHandler = () => {
    console.log('clicked', new Date().getTime());
    setPalette(paletteList[Math.floor(Math.random() * paletteList.length)]);
  };

  const listCards = arr.map(card => {
    return (
      <Card
        key={card}
        bgColor={`${palette}-${Math.floor(Math.random() * 4) + 1}`}
      />
    );
  });

  return (
    <div className="flex flex-col w-1/4">
      <div className="text-5xl font-extrabold mb-8 mx-auto cursor-pointer">
        <span
          className={`bg-clip-text text-transparent from-${palette}-1 via-${palette}-2 to-${palette}-4 bg-gradient-to-r`}
        >
          {palette}
        </span>
      </div>
      <div className="flex flex-row content-start flex-wrap">{listCards}</div>
      <button
        className={`px-4 py-2 bg-palette-4-3 text-gray-800 mx-auto mt-8 text-dark-bg bg-gradient-to-r from-${palette}-2 to-${palette}-3 text-sm font-bold lowercase tracking-wider rounded-lg transform transition hover:scale-105`}
        onClick={setPaletteHandler}
      >
        Random Palette
      </button>
    </div>
  );
};

export default Cards;
