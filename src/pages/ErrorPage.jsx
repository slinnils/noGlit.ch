import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col gap-7 items-center justify-center h-[50vh]">
      <h1 className="text-5xl">Ups..</h1>
      <p className="text-[clamp(0.5rem,25pt,2rem)]">
        Diese Seite existiert leider nicht :(
      </p>
      <Link to={''} className="empty-button">zurück zur Homepage</Link>
    </div>
  );
}
