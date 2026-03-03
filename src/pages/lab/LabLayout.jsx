import { Outlet } from "react-router-dom";
import LabSideBar from "../../components/lab/LabSidebar.jsx";
import classes from "../lab/LabLayout.module.css";
import { ExperimentContextProvider } from "./store/experiments-context.jsx";
import ExperimentTitle from "../../components/lab/ExperimentTitle.jsx";
import ComponentDescription from "../../components/lab/ComponentDescription.jsx";
import { useState } from "react";

export default function LabLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={` h-full w-full md:w-[clamp(600px,98vw,1800px)] ${classes.labContainer}`}
    >
      <button
        onClick={() => setSidebarOpen((prev) => !prev)}
        className={`${sidebarOpen ? "hidden": ""} empty-button md:hidden text-lab-text-bright text-sm ml-5 mt-2 w-[40%] mb-5 flex justify-center ${classes.hamburger}`}
      >
        Experimente
      </button>

      <div
        className={`mx-5 my-5 pb-5 md:ml-0 ${classes.sidebar} ${sidebarOpen ? classes.sidebarOpen : ""}`}
      >
        <LabSideBar onNavigate={() => setSidebarOpen(false)} />
      </div>

      <ExperimentContextProvider>
        <ExperimentTitle
          classes={`ml-10 mb-10 text-2xl justify-self-center pr-5 ${classes.title}`}
        />
        <main className="md:mb-10 mb-5 lg:px-2 lg:ml-10">
          <Outlet />
        </main>
        <div className={`m-3 md:w-1/2 ${classes.descriptionContainer}`}>
          <ComponentDescription classes={classes.description} />
        </div>
      </ExperimentContextProvider>
    </div>
  );
}
