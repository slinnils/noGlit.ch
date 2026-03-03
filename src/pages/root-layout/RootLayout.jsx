import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/navbar/MainNavigation.jsx";
import Header from "../../components/Header.jsx";

import classes from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <div
      className={`overflow-hidden w-[clamp(90vw,98vw,1800px)] min-h-dvh mx-auto ${classes.rootLayout}`}
    >
   
        <div className={classes.header}>
          <Header />
        </div>

        <div className={`self-end ml-auto ${classes.nav}`}>
          <MainNavigation />
        </div>

      

      <main className="mt-5">
        <Outlet />
      </main>

      <footer className="md:mt-10 mt-auto">
        <p className="text-lab-text-muted">©2026 noGlit.ch</p>
      </footer>
    </div>
  );
}
