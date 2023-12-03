
import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';

// GraphQL query to fetch all the blogs from the backend
const BLOGS = gql`
  {
    blogs {
      data {
        id
        attributes {
          Title
          Body
          Author
        }
      }
    }
  }
`;

export default function Homepage() {
  // Execute the query using the useQuery hook and store the return values.
  const { loading, error, data } = useQuery(BLOGS);

  // Display loading state
  if (loading) return <p>Loading...</p>;

  // Display error state
  if (error) return <p>Error :(</p>;

  // Log the data to the console
  console.log(data);

  return (
    <div>
      {/* Map through the data */}
      {data.blogs.data.map((blog) => (
        <div key={blog.id} className='mt-2 mb-2 p-4 bg-white rounded-md'>
          <div className='text-xl'>{blog.attributes.Title}</div>
          <small>{blog.attributes.Author}</small>



          {blog.attributes.Image && (
  <div className='mt-2 mb-2'>
    <img
      src={blog.attributes.Image}
      alt={`Blog Cover - ${blog.attributes.Title}`}
      style={{ maxWidth: '100%' }}
    />
  </div>
)}
          {/* Display only the first 150 characters of the body */}
          <div>
            {/* Check if Body is defined and is a string before using substring */}
            {blog.attributes.Body &&
            typeof blog.attributes.Body === 'string'
              ? blog.attributes.Body.substring(0, 150) + '...'
              : 'No preview available'}
          </div>

          {/* Link to display the whole blog content */}
          <Link to={`/blog/${blog.id}`} className='text-purple-600'>
            <div>Read more...</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
