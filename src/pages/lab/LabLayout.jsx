import { Outlet } from "react-router-dom";
import LabSideBar from "../../components/navbar/lab/LabSidebar";
import classes from "../lab/LabLayout.module.css";

export default function LabLayout() {
  return (
    <div className={`h-full w-[clamp(600px,98vw,1800px)] ${classes.labContainer}`}>
      <div className={classes.sidebar}>
        <LabSideBar />
      </div>

      <h2 className={`ml-10 text-2xl justify-self-center ${classes.title}`}>Das ist der Titel der Komponente</h2>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
