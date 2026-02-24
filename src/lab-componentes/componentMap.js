import IntersectingStateProblem from "./AvoidIntersectingStates/IntersectingStatesProblem.jsx";
import ComputedValuesProblem from './ComputedValuesProblem.jsx'
import Counter from "./Counter/Counter.jsx";
import MiniToDo from "./MiniToDo/MiniToDo.jsx";

export const componentMap = {
  stateUpdateCallback: IntersectingStateProblem,
  ComputedValues: ComputedValuesProblem,
  counter: Counter,
  todo: MiniToDo,
};
