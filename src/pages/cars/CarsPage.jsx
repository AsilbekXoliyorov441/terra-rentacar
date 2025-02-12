import React from 'react'
import { Link } from 'react-router-dom';

const CarsPage = () => {
  return (
    <div>
      CarsPage
      <Link className='text-blue-700' to={`/cars/1`}>CarLink</Link>
    </div>
  );
}

export default CarsPage