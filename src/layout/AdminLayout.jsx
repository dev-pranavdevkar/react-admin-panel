import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function AdminLayout() {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Page Content */}
        <div className="layout-page">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <div className="content-wrapper">
            <Outlet />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
      {/*  Overlay  */}
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
  );
}
export default AdminLayout;