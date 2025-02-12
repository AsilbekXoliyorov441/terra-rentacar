import React from 'react'
import { Link } from 'react-router-dom';

const BrandsPage = () => {
  return (
    <div>
      BrandsPage
      <Link className="text-blue-500" to="/brands/1">
        Brand link
      </Link>
    </div>
  );
}

export default BrandsPage