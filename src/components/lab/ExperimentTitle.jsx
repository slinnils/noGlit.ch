import { use } from "react";
import { ExperimentContext } from "../../pages/lab/store/experiments-context";

export default function ExperimentTitle({ classes }) {
  const { currentExperiment } = use(ExperimentContext);
  return <h2 className={classes}>{currentExperiment?.title}</h2>;
}
