import ExperimentList from "./ExperimentList.jsx";

export default function LabSideBar() {
  return (
    <section className="flex flex-col items-center bg-lab-surface border-lab-accent border rounded-2xl ml-5 h-full py-5 shrink-0 w-[clamp(262px,30vw,300px)]">
      <ExperimentList />
    </section>
  );
}
