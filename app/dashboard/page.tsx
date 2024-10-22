"use client";

import Nav from "../components/Nav";
import DashboardInfo from "../components/DashboardInfo";
import DashboardAccordion from "../components/DashboardAccordion";
import UserDashboardAccordion from "../components/UserDashboardAccordion";

export default function Dashboard() {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 min-h-[100vh]">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1 mt-32">
            <DashboardInfo />
            <UserDashboardAccordion />
          </div>
          <div className="col-span-2 mt-32 ml-20">
            <DashboardAccordion />
          </div>
        </div>
      </div>
    </>
  );
}

