import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTodo from "./components/CreateTodo";
import TodosList from "./components/TodosList";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
