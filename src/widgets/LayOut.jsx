import "./layout.css";
import { Outlet } from "@remix-run/react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

export default function LayOut() {
  return (
    <div className="tool-moa-layout">
      <Header />
      <main className="tool-moa__main">
        <SideBar />
        <component />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
