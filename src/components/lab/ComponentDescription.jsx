import { use } from "react";
import { ExperimentContext } from "../../pages/lab/store/experiments-context";

export default function ComponentDescription({ classes }) {
  const { currentExperiment } = use(ExperimentContext);
  return <p className={`text-center ${classes}`}>{currentExperiment?.description}</p>;
}
