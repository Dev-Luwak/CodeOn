import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout({ onLoginClick }) {
  return (
    <div>
      <Navbar onLoginClick={onLoginClick} /> {/* Pass onLoginClick to Navbar */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
