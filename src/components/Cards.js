import React, { useState, useCallback, useRef } from 'react';
import Card from './Card';
import { toPng } from 'html-to-image';

const Cards = () => {
  const ref = useRef(null);
  const arr = [...Array(144).keys()];

  const downloadImageHandler = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, {
      cacheBust: true,
    })
      .then(dataUrl => {
        const link = document.createElement('a');
        link.download = `${new Date().getTime()}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch(err => {
        console.log(err);
      });
  }, [ref]);

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
    <div className="flex flex-col items-center">
      <div className="text-4xl text-center font-extrabold mb-8 cursor-pointer ">
        <span
          className={`bg-clip-text text-transparent from-${palette}-1 via-${palette}-3 to-${palette}-4 bg-gradient-to-r`}
        >
          {palette.replace('-', ' ')}
        </span>
      </div>
      <div className="flex flex-col xl:w-1/4 lg:w-1/2 md:w-1/3 w-2/3">
        <div className="flex flex-row content-start flex-wrap" ref={ref}>
          {listCards}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-4 mt-8 space-y-4 lg:space-y-0">
        <button
          className={`px-4 py-2 bg-palette-4-3 text-gray-800 mx-auto text-dark-bg bg-gradient-to-r from-${palette}-2 to-${palette}-3 text-sm font-bold lowercase tracking-wider rounded-lg transform transition hover:scale-105`}
          onClick={setPaletteHandler}
        >
          Random Palette
        </button>
        <button
          className={`px-4 py-2 bg-palette-4-3 text-gray-800 mx-auto text-dark-bg bg-gradient-to-r from-${palette}-3 to-${palette}-2 text-sm font-bold lowercase tracking-wider rounded-lg transform transition hover:scale-105`}
          onClick={downloadImageHandler}
        >
          Download Image
        </button>
      </div>
    </div>
  );
};

export default Cards;
