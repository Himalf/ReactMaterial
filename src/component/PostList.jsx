import React from "react";

export default function PostList({ posts, onEdit, onDelete }) {
  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post._id}
          style={{
            border: "1px solid gray",
            borderRadius: "10px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => onEdit(post)}>Edit</button>
          <button
            onClick={() => onDelete(post._id)}
            style={{ marginLeft: "10px", backgroundColor: "#ff4d4d" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
