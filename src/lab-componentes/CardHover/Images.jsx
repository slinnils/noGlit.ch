import { useRef } from "react";
import classes from '../CardHover/hover.module.css'

export default function Images() {
  const cardRef = useRef();
  const overlayRef = useRef();

  function getDirection(e) {
    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX;
    const y = e.clientY;

    const distLeft = Math.abs(x - rect.left);
    const distRight = Math.abs(rect.right - x);
    const distTop = Math.abs(y - rect.top);
    const distBottom = Math.abs(rect.bottom - y);

    const min = Math.min(distLeft, distRight, distTop, distBottom);

    if (min === distLeft) return "left";
    if (min === distRight) return "right";
    if (min === distTop) return "top";
    return "bottom";
  }

  function setOverlayOutside(dir) {
    const el = overlayRef.current;

    el.style.transition = "none";
    el.style.opacity = "0";

    if (dir === "left") el.style.transform = "translateX(-100%)";
    else if (dir === "right") el.style.transform = "translateX(100%)";
    else if (dir === "top") el.style.transform = "translateY(-100%)";
    else el.style.transform = "translateY(100%)";
    el.offsetHeight;
  }

  function animateOverlayIn() {
    const el = overlayRef.current;

    el.style.transition = "transform 400ms ease, opacity 300ms ease";
    el.style.transform = "translate(0, 0)";
    el.style.opacity = "1";
  }

  function animateOverlayOut(dir) {
    const el = overlayRef.current;

    el.style.transition = "transform 300ms ease, opacity 300ms ease";
    el.style.opacity = "0";

    if (dir === "left") el.style.transform = "translateX(-100%)";
    else if (dir === "right") el.style.transform = "translateX(100%)";
    else if (dir === "top") el.style.transform = "translateY(-100%)";
    else el.style.transform = "translateY(100%)";
  }

  function handleEnter(e) {
    const dir = getDirection(e);
    setOverlayOutside(dir);
    animateOverlayIn();
  }

  function handleLeave(e) {
    const dir = getDirection(e);
    animateOverlayOut(dir);
  }


  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={classes.cardTest}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 16,
        width: 200,
      }}
    >
      <div ref={overlayRef} className={classes.overlay}>
        <p className="text-stone-200 text-3xl">Das ist ein Bild</p>
        <button className="cursor-pointer py-1 px-3 bg-blue-400 rounded-md">
          Button
        </button>
      </div>

      <img
        className="block w-full h-auto"
        src="https://picsum.photos/200/300?random=1"
        alt=""
      />
    </div>
  );
}
