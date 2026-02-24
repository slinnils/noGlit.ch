import ExperimentList from "./ExperimentList.jsx";

export default function LabSideBar() {
  return (
    <section className="card flex flex-col items-center h-full shrink-0 w-[clamp(262px,30vw,300px)]">
      <ExperimentList />
    </section>
  );
}
