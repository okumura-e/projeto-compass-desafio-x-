import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FormPage from "./pages/FormPage";
import LoginForm from "./components/forms/LoginForm";
import FirstStepForm from "./components/forms/FirstStepForm";
import NewPasswordForm from "./components/forms/NewPassword";
import PerfilPage from "./pages/PerfilPage";
import ForgotPasswordForm from "./components/forms/ForgotPassword";
import EditPerfilPage from "./pages/EditPerfilPage";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route index={false} path="/" element={<FormPage />}>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<FirstStepForm />} />
      <Route path="/forgot-password" element={<ForgotPasswordForm />} />
      <Route path="/new-password" element={<NewPasswordForm />} />
    </Route>,
    <Route path="/profile" element={<PerfilPage />} />,
    <Route path="/edit-profile" element={<EditPerfilPage />} />,
  ]),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
