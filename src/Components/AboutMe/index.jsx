import selfie from "../../assets/avatar.jpg";
import { FormattedMessage } from "react-intl";

function AboutMe() {
  return (
    <div
      id="About"
      className="hero min-h-screen bg-gradient-to-r from-primary-focus to-[#0c0717]"
    >
      <div className="hero-content flex-col lg:flex-row">
        <img src={selfie} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="pr-8">
          <h1 className="text-8xl font-bold ml-8 pb-8 text-primary-content">
            {/* SOBRE MI */}
            <FormattedMessage id="about.title" defaultMessage="ABOUT ME" />
          </h1>
          <p className="ml-8 py-6 text-4xl pb-16 text-primary-content">
            {/* Soy Facundo Iglesias, vivo en Buenos Aires - Argentina. Tengo
            experiencia en el desarrollo de páginas web. Desarrollo
            principalmente en JavaScript y trabajo con tecnologías como
            React.js, Tailwind.css y Node.js. */}
            <FormattedMessage
              id="about.description"
              defaultMessage="My name is Facundo Iglesias, i'm from Buenos Aires - Argentina. I have experience developing web pages using HTML, CSS, Javascript and working with technologies like React.js, Tailwind.css & Node.js."
            />
          </p>
          <div className="text-center">
            <a
              href="#Projects"
              className="btn btn-primary text-center w-40 h-8"
            >
              {/* PROYECTOS */}
              <FormattedMessage
                id="about.btnProjects"
                defaultMessage="PROJECTS"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AboutMe };
