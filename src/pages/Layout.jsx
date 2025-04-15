import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f9fc] lg:flex-row">
      <Outlet />
    </div>
  );
};

export default Layout;
