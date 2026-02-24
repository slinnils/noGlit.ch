import { Outlet } from "react-router-dom";
import LabSideBar from "../../components/navbar/lab/LabSidebar";
import classes from "../lab/LabLayout.module.css";
import { ExperimentContextProvider } from "./store/experiments-context.jsx";
import ExperimentTitle from "../../components/navbar/lab/ExperimentTitle.jsx";

export default function LabLayout() {
  return (
    <div
      className={`h-full w-[clamp(600px,98vw,1800px)] ${classes.labContainer}`}
    >
      <div className={classes.sidebar}>
        <LabSideBar />
      </div>

      <ExperimentContextProvider>
        <ExperimentTitle
          classes={`ml-10 mb-10 text-2xl justify-self-center ${classes.title}`}
        />

        <main className="mb-10">
          <Outlet />
        </main>
      </ExperimentContextProvider>
    </div>
  );
}
