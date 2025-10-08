import React from "react";
import { Link } from "react-router-dom";

const StudentCard = ({ student, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold ">{student.name}</h3>
        <p className="text-gray-600">{student.email}</p>
        <p className="text-gray-500">{student.course}</p>
      </div>
      <div className="flex space-x-2">
        <Link
          to={`edit/${student._id}`}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(student._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
