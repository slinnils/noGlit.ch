import { useLoaderData } from "react-router-dom";
import { componentMap } from "../../lab-componentes/componentMap";
import { use, useEffect } from "react";
import { ExperimentContext } from "./store/experiments-context";
import { Suspense } from "react";

export default function LabComponent() {
  const experiment = useLoaderData();
  const { setCurrentExperiment } = use(ExperimentContext);

  useEffect(() => {
    setCurrentExperiment(experiment);
  }, [experiment, setCurrentExperiment]);

  const Component = experiment ? componentMap[experiment.componentKey] : null;

  if (!Component)
    return <p className="text-white md:ml-10">Komponente nicht gefunden.</p>;

  return (
    <div className="md:ml-10">
      <Suspense>
        <Component />
      </Suspense>
    </div>
  );
}
