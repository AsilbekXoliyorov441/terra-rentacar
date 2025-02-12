import React from 'react'
import { Link } from 'react-router-dom';

const SingleBlogPage = () => {
  return (
    <div>
      SingleBlogPage
      <Link className="text-blue-600" to="/blog/2">
        blog card
      </Link>
    </div>
  );
}

export default SingleBlogPage