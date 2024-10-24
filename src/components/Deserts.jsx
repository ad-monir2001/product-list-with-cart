import { useEffect } from 'react';
import { useState } from 'react';
import Desert from './Desert';

const Deserts = ({handleAddCart}) => {
  const [deserts, setDeserts] = useState([]);
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setDeserts(data));
  }, []);
  return (
    <div className="w-2/3">
      <h2 className="font-bold text-3xl">Deserts: {deserts.length}</h2>
      <div className='grid grid-cols-3 gap-4 mt-8'>
      {deserts.map((desert, index) => (
        <Desert 
        key={index}
        desert={desert}
        handleAddCart={handleAddCart}
        ></Desert>
      ))}
      </div>
    </div>
  );
};

export default Deserts;
