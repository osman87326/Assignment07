import React, { use } from 'react'
import { useLoaderData } from 'react-router';

const Posts = () => {
     const posts=useLoaderData();
  return (
    <div>
      <h5>This are my post:{posts.length}</h5>
    </div>
  )
}

export default Posts
