import { useParams } from "react-router-dom";
import { componentMap } from "../../lab-componentes/componentMap";
import { fetchExperimentBySlug } from "../../sanity/queries";
import { use, useEffect, useState } from "react";
import { ExperimentContext } from "./store/experiments-context";

export default function LabComponent() {
  const { component } = useParams();
  const [experiment, setExperiment] = useState(null);
  const { setCurrentExperiment } = use(ExperimentContext);

  useEffect(() => {
    fetchExperimentBySlug(component).then((data) => {
      setExperiment(data);
      setCurrentExperiment(data);
    });
  }, [component, setCurrentExperiment]);

  const Component = experiment ? componentMap[experiment.componentKey] : null;

  if (!Component)
    return <p className="text-white ml-10">Komponente nicht gefunden.</p>;

  return (
    <div className="ml-10">
      <Component />
    </div>
  );
}
