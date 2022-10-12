import { ProjectCards } from "../ProjectCards";

function Proyectos() {
  return (
    <div id="Projects">
      <div className="mb-12 pt-20 ml-60">
        <h1 className="text-8xl font-bold">PROYECTOS</h1>
      </div>
      <div className="grid grid-cols-4 justify-items-center">
        <ProjectCards />
      </div>
    </div>
  );
}

export { Proyectos };
