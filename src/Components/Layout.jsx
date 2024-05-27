import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartTab from "./CartTab";
import { useSelector } from "react-redux";

function Layout() {
  const statusTabCart = useSelector(store => store.cart.statusTab);

  return (
    <div className="bg-zinc-600">
      <main className={`w-[1000px] max-w-full m-auto p-5 transform duration-500 ${statusTabCart === false ? '' : "-translate-x-56"}`}>
        <Header />
        <Outlet />
      </main>
      <CartTab/>
    </div>
  );
}

export default Layout;
