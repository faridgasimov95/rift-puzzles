import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
