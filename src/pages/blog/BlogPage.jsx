import React from 'react'
import { Link } from 'react-router-dom'

const BlogPage = () => {
  return (
    <div>BlogPage
      <Link className="text-blue-600" to="/blog/1">blog card</Link>
    </div>
  )
}

export default BlogPage