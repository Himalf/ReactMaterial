import React, { useEffect, useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import StudentCard from "../components/StudentCard";
const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchData = async () => {
    const res = await API.get("");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await API.delete(`/${id}`);
    fetchData();
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold ">ALl Students</h2>
        <Link
          to="/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex gap-1 items-center"
        >
          <FaPlus /> Add Student
        </Link>
        {students.length > 0 ? (
          students.map((s) => (
            <StudentCard key={s._id} student={s} onDelete={handleDelete} />
          ))
        ) : (
          <p>No Students Found</p>
        )}
      </div>
    </div>
  );
};

export default StudentList;
