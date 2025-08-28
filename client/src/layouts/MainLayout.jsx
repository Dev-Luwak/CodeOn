import NavBar from "../components/NavBar";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const { pathname } = useLocation();
  const hideNav = pathname.startsWith("/project/"); // hide for workspace

  return (
    <div className="flex flex-col min-h-screen bg-[#111113] text-white">
      {!hideNav && <NavBar />}
      <Outlet />
    </div>
  );
}
