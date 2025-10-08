import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AddStudent from "./pages/AddStudent";
import StudentList from "./pages/StudentList";
import EditStudent from "./pages/EditStudent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/add" element={<AddStudent />} />
            <Route path="/list" element={<StudentList />} />
            <Route path="/list/edit/:id" element={<EditStudent />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
