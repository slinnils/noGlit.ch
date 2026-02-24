import IntersectingStateProblem from "./AvoidIntersectingStates/IntersectingStatesProblem.jsx";
import ComputedValuesProblem from './ComputedValuesProblem.jsx'
import Counter from "./Counter/Counter.jsx";
import MiniToDo from "./MiniToDo/MiniToDo.jsx";
import GameSkillPointsApp from './GameSkillPoints/GameSkillPointsApp.jsx'
import Timeout from './Timeout.jsx'
import ModalApp from './Modal/ModalApp.jsx'
import Maps from './Maps.jsx'
import CardHoverFx from './CardHover/CardHoverFx.jsx'
import Form from './forms/Form.jsx'
import WeatherApp from './WeatherApp/WeatherApp.jsx'

export const componentMap = {
  stateUpdateCallback: IntersectingStateProblem,
  ComputedValues: ComputedValuesProblem,
  counter: Counter,
  todo: MiniToDo,
  GameSkillPointsApp: GameSkillPointsApp,
  timeout: Timeout,
  modal: ModalApp,
  maps: Maps,
  cardHover: CardHoverFx,
  forms: Form,
  weather: WeatherApp,
};
