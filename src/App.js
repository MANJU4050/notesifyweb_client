import Registration from "./components/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Updatenote from "./features/notes/Updatenote";
import ViewNote from "./features/notes/ViewNote";
import AddView from "./components/AddView";
import SharedLayout from "./components/SharedLayout";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<AddView />} />
          <Route path="updatenote/:noteid" element={<Updatenote />} />
          <Route path="display" element={<ViewNote />} />
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
