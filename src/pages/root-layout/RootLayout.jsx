import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/navbar/MainNavigation.jsx";
import Header from "../../components/Header.jsx";

import classes from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <div
      className={`w-[clamp(300px,100vw,1800px)] h-full mx-auto ${classes.rootLayout}`}
    >
   

        <div className={classes.header}>
          <Header />
        </div>

        <div className={`self-center ml-auto ${classes.nav}`}>
          <MainNavigation />
        </div>

      

      <main className="mt-5">
        <Outlet />
      </main>

      <footer className="mt-10">
        <p className="text-lab-text-muted">©2026 noGlit.ch</p>
      </footer>
    </div>
  );
}
