import ExperimentList from "./ExperimentList.jsx";

export default function LabSideBar({ onNavigate }) {
  return (
    <nav className="card flex flex-col items-center h-full shrink-0 w-full md:w-[clamp(262px,30vw,300px)] py-4 overflow-y-auto">
      <ExperimentList onNavigate={onNavigate} />
    </nav>
  );
}
