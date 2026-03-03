import { lazy } from "react";

export const componentMap = {
  stateUpdateCallback: lazy(() => import("./AvoidIntersectingStates/IntersectingStatesProblem.jsx")),
  ComputedValues: lazy(() => import("./ComputedValuesProblem.jsx")),
  counter: lazy(() => import("./Counter/Counter.jsx")),
  todo: lazy(() => import("./MiniToDo/MiniToDo.jsx")),
  GameSkillPointsApp: lazy(() => import("./GameSkillPoints/GameSkillPointsApp.jsx")),
  timeout: lazy(() => import("./Timeout.jsx")),
  modal: lazy(() => import("./Modal/ModalApp.jsx")),
  maps: lazy(() => import("./Maps.jsx")),
  cardHover: lazy(() => import("./CardHover/CardHoverFx.jsx")),
  forms: lazy(() => import("./forms/Form.jsx")),
  weather: lazy(() => import("./WeatherApp/WeatherApp.jsx")),
};