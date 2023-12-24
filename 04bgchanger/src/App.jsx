
import React, { useState, useEffect } from 'react';

const ColorButtons = () => {
  const [color, setColor] = useState('');

  useEffect(() => {
    const storedColor = localStorage.getItem('selectedColor');
    if (storedColor) {
      setColor(storedColor);
      document.title = `${storedColor} Color`; // Set the title accordingly
    }
  }, []);

  const setColorAndTitle = (colorName, title) => {
    setColor(colorName);
    document.title = `${title} Color`; // Set the title when a color is clicked
    localStorage.setItem('selectedColor', colorName); // Store the selected color in localStorage
  };

  return (
    <>
      <div className='w-full h-screen duration-800 font-mono text-xs' style={{ backgroundColor: color }}>
        <div className='inline-flex justify-start bottom-12 inset-x-0 px-2'>
          <div className='mt-4 flex flex-col justify-start gap-3 shadow-lg bg-white px-5 py-4 rounded-xl'>
        
            <button
        onClick={() => setColorAndTitle('red', 'Dark Red')}
        className='outline-none px-3 py-2 font-semibold text-black  rounded-sm shadow-md shadow-slate-400'
        style={{ backgroundColor: 'red' }}
      >
        Dark Red
      </button>

      <button
        onClick={() => setColorAndTitle('green', 'Dark Green')}
        className='outline-none px-3 py-2 font-semibold text-white  rounded-sm shadow-md shadow-slate-400'
        style={{ backgroundColor: 'green' }}
      >
        Dark Green
      </button>

      <button
        onClick={() => setColorAndTitle('yellowgreen', 'Yellow Green')}
        className='outline-none px-3 py-2 font-semibold text-white  rounded-sm shadow-md shadow-slate-400'
        style={{ backgroundColor: 'yellowgreen' }}
      >
        Yellow Green
      </button>

      <button
        onClick={() => setColorAndTitle('#edd468', 'Light Yellow')}
        className='outline-none px-3 py-2 font-semibold text-black  rounded-sm shadow-md shadow-slate-400'
        style={{ backgroundColor: '#edd468' }}
      >
        Light Yellow
      </button>

      <button
        onClick={() => setColorAndTitle('pink', 'Pink')}
        className='outline-none px-3 py-2 font-semibold text-white  rounded-sm shadow-md shadow-slate-400'
        style={{ backgroundColor: '#ff216b' }}
      >
        Pink
      </button>

      <button
        onClick={() => setColorAndTitle('#2353ff', 'Blue')}
        className='outline-none px-3 py-2 font-semibold text-white  rounded-sm shadow-md shadow-slate-400'
        style={{ backgroundColor: '#2353ff' }}
      >
        Blue
      </button>

      <button
        onClick={() => setColorAndTitle('#ff8223', 'Orange')}
        className='outline-none px-3 py-2 font-semibold text-black  rounded-sm shadow-md shadow-slate-400'
        style={{ backgroundColor: '#ff8223' }}
      >
        Orange
      </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorButtons;

