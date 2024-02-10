"use client";
import CardWidget from "./components/CardWidget";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import boxTick from "./assets/icons/box-tick.png";
import boxRotate from "./assets/icons/3d-rotate.png";
import shoppingCart from "./assets/icons/shopping-cart.png";
import coin from "./assets/icons/coin.png";
import TableWidget from "./components/TableWidget";
import ProgressWidget from "./components/ProgressWidget";
import Chart from "./components/Chart";
import Backdrop from "./components/Backdrop";
import { useContext } from "react";
import { SidebarContext } from "./context/SidebarContext";

export default function Dashboard() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  return (
    // ================= Container =================
    <div className="relative w-full bg-[var(--gray-50)] dark:bg-[var(--dark-bg-primary)]">
      <Sidebar />
      {isSidebarOpen && (
        <Backdrop show={isSidebarOpen} setShow={setIsSidebarOpen} />
      )}

      <Header />
      <main className="relative w-full max-w-[1440px] sm:ml-16 2xl:mx-auto mt-[5.2rem] sm:w-[calc(100%-4rem)] min-h-screen dark:text-[var(--gray-400)]">
        <div className="grid grid-cols-12 gap-3 p-4">
          <div className="bg-white px-4 py-5 col-span-12 rounded-lg border border-[var(--gray-100)] lg:col-span-7 dark:bg-[var(--dark-bg-secondary)] dark:border-[var(--gray-700)]">
            <Chart />
          </div>
          <div className="grid gap-2 col-span-12 sm:grid-cols-2 lg:col-span-5">
            <CardWidget
              icon={boxTick}
              cardTitle="Total Order"
              stats="350"
              percent="23.5%"
              trend="up"
            />
            <CardWidget
              icon={boxRotate}
              cardTitle="Total Refund"
              stats="270"
              percent="23.5%"
              trend="down"
            />
            <CardWidget
              icon={shoppingCart}
              cardTitle="Average Sales"
              stats="1567"
              percent="23.5%"
              trend="down"
            />
            <CardWidget
              icon={coin}
              cardTitle="Total Income"
              stats="$350,000"
              percent="23.5%"
              trend="up"
            />
          </div>
          <div className="bg-white col-span-12 rounded-lg border border-[var(--gray-100)] lg:col-span-7 dark:bg-[var(--dark-bg-secondary)] dark:border-[var(--gray-700)]">
            <TableWidget />
          </div>
          <div className="bg-white col-span-12 rounded-lg border border-[var(--gray-100)] lg:col-span-5 dark:bg-[var(--dark-bg-secondary)] dark:border-[var(--gray-700)]">
            <ProgressWidget />
          </div>
        </div>
      </main>
    </div>
  );
}
