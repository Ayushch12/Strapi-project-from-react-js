import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const BLOG = gql`
  query GetBlog($id: ID!) {
    blog(id: $id) {
      data {
        id
        attributes {
          Title
          Body
          Image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default function BlogDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(BLOG, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { Title, Body, Author, Image} = data.blog.data.attributes;
console.log(data.blog.data.attributes)
  return (
    <div className="mt-2 mb-2 p-4 bg-white rounded-md">
      <div className="text-2xl">{Title}</div>

      {Image && (
        <div className="mt-2 mb-2">
          <img
            src={"http://localhost:1337"+Image.data.attributes.url}
            alt={`Blog Cover - ${Title}`}
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}

      <div className="mt-2 mb-2">
        {/* Ensure that Body is a string before rendering */}
        {typeof Body === "string" ? Body : "Invalid content"}
      </div>
      <div className="">
        <p className="text-purple-500">Blog Author: {Author}</p>
      </div>
    </div>
  );
}




