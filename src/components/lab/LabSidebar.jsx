import ExperimentList from "./ExperimentList.jsx";

export default function LabSideBar({ onNavigate }) {
  return (
    <nav className="card flex flex-col items-center h-auto md:h-full shrink-0 w-[90vw] md:w-[clamp(262px,30vw,300px)]">
      <ExperimentList onNavigate={onNavigate} />
    </nav>
  );
}
