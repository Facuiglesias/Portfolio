import selfie from "../../assets/avatar.jpg";

function SobreMi() {
  return (
    <div
      id="About"
      className="hero min-h-screen bg-gradient-to-r from-primary-focus to-[#0c0717]"
    >
      <div className="hero-content flex-col lg:flex-row">
        <img src={selfie} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="pr-8">
          <h1 className="text-8xl font-bold ml-8 pb-8 text-primary-content">
            SOBRE MI
          </h1>
          <p className="ml-8 py-6 text-4xl pb-16 text-primary-content">
            Soy Facundo Iglesias, vivo en Buenos Aires - Argentina. Tengo
            experiencia en el desarrollo de páginas web. Desarrollo
            principalmente en JavaScript y trabajo con tecnologías como
            React.js, Tailwind.css y Node.js.
          </p>
          <div className="text-center">
            <a
              href="#Projects"
              className="btn btn-primary text-center w-40 h-8"
            >
              PROYECTOS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SobreMi };
