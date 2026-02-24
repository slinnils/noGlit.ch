import { createContext, useReducer } from "react";

export const SkillContext = createContext({
  pointsToSpend: 15,
  stats: { strength: 1, agility: 1, intelligence: 1 },
  class: "Beginner" /*'Warrior', 'Mage', 'Thief'*/,
  inc: (stat) => {},
  dec: (stat) => {},
});

function skillPointReducer(state, action) {
  if (action.type === "INC") {
    if(state.pointsToSpend < 1){
        return state
    }
    return {
      ...state,
      pointsToSpend: state.pointsToSpend - 1, 
      stats: {
        ...state.stats,
        [action.stat]: state.stats[action.stat] + 1,
      },
    };
  }

  if (action.type === "DEC") {
    const statValue = state.stats[action.stat];
    if(statValue <= 1){
        return state;
    }
    return {
      ...state,
      pointsToSpend: state.pointsToSpend + 1,
      stats: {
        ...state.stats,
        [action.stat]: statValue - 1,
      },
    };
  }
  return state;
}

export default function SkillContextProvider({ children }) {
  const [state, dispatch] = useReducer(skillPointReducer, {
    pointsToSpend: 15,
    stats: { strength: 1, agility: 1, intelligence: 1 },
    class: "Beginner" /*'Warrior', 'Mage', 'Thief'*/,
  });

  const value = {
    pointsToSpend: state.pointsToSpend,
    stats: state.stats,
    class: state.class,
    inc: (stat) => dispatch({ type: "INC", stat }),
    dec: (stat) => dispatch({ type: "DEC", stat }),
  };

  return <SkillContext value={value}>{children}</SkillContext>;
}
