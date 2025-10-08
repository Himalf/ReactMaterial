import React, { useEffect } from "react";
import { useFormik } from "formik";

export default function PostForm({ onSubmit, editingPost }) {
  const formik = useFormik({
    initialValues: { title: "", body: "" },
    onSubmit: (values, { resetForm }) => {
      onSubmit(values, resetForm);
    },
  });

  // When editing — prefill fields
  useEffect(() => {
    if (editingPost) {
      formik.setValues({
        title: editingPost.title,
        body: editingPost.body,
      });
    }
  }, [editingPost]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "8px" }}
    >
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        value={formik.values.title}
        onChange={formik.handleChange}
        required
      />
      <input
        type="text"
        name="body"
        placeholder="Enter body"
        value={formik.values.body}
        onChange={formik.handleChange}
        required
      />
      <button type="submit">
        {editingPost ? "Update Post ✏️" : "Add Post ➕"}
      </button>
    </form>
  );
}
