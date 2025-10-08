import React, { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "./PostForm";
import PostList from "./PostList";

const API_URL =
  "https://crudcrud.com/api/cd15b2d48c4e4036bc677c4573ca72af/posts";

export default function PostManager() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  // 🔹 Fetch all posts
  const fetchPosts = async () => {
    try {
      const res = await axios.get(API_URL);
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // 🔹 Add or Update Post
  const savePost = async (values, resetForm) => {
    try {
      if (editingPost) {
        await axios.put(`${API_URL}/${editingPost._id}`, values);
        alert("✅ Post updated!");
        setEditingPost(null);
      } else {
        await axios.post(API_URL, values);
        alert("✅ Post added!");
      }
      resetForm();
      fetchPosts();
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  // 🔹 Delete Post
  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      alert("🗑️ Post deleted!");
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>📘 Post Manager (CRUD Example)</h2>
      <PostForm onSubmit={savePost} editingPost={editingPost} />
      <hr />
      <PostList posts={posts} onEdit={setEditingPost} onDelete={deletePost} />
    </div>
  );
}
