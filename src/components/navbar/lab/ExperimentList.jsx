//import { components } from "../component-list.js";

export default function ExperimentList({ onSelectComponent, selectedId }) {
  return (
    <ul className="text-xl font-semibold text-[#D1F8EF] flex flex-col items-center w-full">
      <li className="w-full flex justify-center mt-4">1</li>
      <li className="w-full flex justify-center mt-4">2</li>
      <li className="w-full flex justify-center mt-4">3</li>
      <li className="w-full flex justify-center mt-4">4</li>
      <li className="w-full flex justify-center mt-4">5</li>
      <li className="w-full flex justify-center mt-4">6</li>
    </ul>
  );
}




/*<ul className="text-xl font-semibold text-[#D1F8EF] flex flex-col items-center w-full">
      {components.map((component) => (
        <li className="w-full flex justify-center mt-4" key={component.id}>
          <button
            onClick={() => onSelectComponent(component.id)}
            className={`w-[80%] ${selectedId === component.id ? "selected" : ''}`}
          >
            {component.label}
          </button>
        </li>
      ))}
    </ul>*/