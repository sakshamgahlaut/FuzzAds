import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewOrder from "./pages/NewOrder";
import Services from "./pages/Services";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import Support from "./pages/Support";
import Affiliate from "./pages/Affiliate";
import API from "./pages/Api";
import NotFound from "./pages/Notfound";

// 🔐 Protected Route
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

// 📦 Common Dashboard Layout
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <NewOrder />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Services />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />


        <Route
  path="/orders"
  element={
    <ProtectedRoute>
      <DashboardLayout>
        <Orders />
      </DashboardLayout>
    </ProtectedRoute>
  }
/>

        <Route
          path="/support"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Support />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/affiliate"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Affiliate />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />


        <Route
          path="/api"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <API />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />


        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
