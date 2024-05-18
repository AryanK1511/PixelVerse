"use client";
import { Navbar } from "../components/Navbar";
import DashboardInfo from "../components/DashboardInfo";

export default function Dashboard() {
  return (
    <>
      <Navbar /> 
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 mt-32">
            <DashboardInfo />
          </div>
          <div className="col-span-2 mt-32">
            Column 2
          </div>
        </div>
      </div>
    </>
  );
}

