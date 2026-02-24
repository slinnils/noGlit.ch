import { useParams } from "react-router-dom";
import { componentMap } from "../../lab-componentes/componentMap";
import { fetchExperimentBySlug } from "../../sanity/queries";
import { useEffect, useState } from "react";

export default function LabComponent() {
  const { component } = useParams();
  const [experiment, setExperiment] = useState(null);

  useEffect(() => {
    fetchExperimentBySlug(component).then(setExperiment);
  }, [component]);

  const Component = experiment ? componentMap[experiment.componentKey] : null;

  if (!Component) return <p className="text-white ml-10">Komponente nicht gefunden.</p>;

  return (
    <div className="ml-10">
      <Component />
    </div>
  );
}