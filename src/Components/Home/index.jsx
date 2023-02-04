import { FormattedMessage } from "react-intl";

function Home() {
  return (
    <div id="Introduction" className="hero min-h-screen bg-background bg-cover">
      <div className="hero-content text-justify text-primary-content">
        <div className="max-w-7xl">
          <h1 className="mb-8 text-8xl font-bold">
            {/* Hola! Soy Facundo Iglesias */}
            <FormattedMessage
              id="home.welcome"
              defaultMessage="Hi! I'm Facundo Iglesias"
            />
          </h1>
          <p className="mb-8 text-6xl underline underline-offset-[40px]">
            {/* Desarrollador Web | Front-END Dev */}
            <FormattedMessage
              id="home.job"
              defaultMessage="Web developer | FRONTEND"
            />
          </p>
          <p className="mb-8 mt-16 text-4xl">
            {/* Soy un joven programador amante de la tecnología, con experiencia en
            el desarrollo de paginas web. */}
            <FormattedMessage
              id="home.resume"
              defaultMessage="I'm a young lover of technology, with experience developing web pages. Press the button below if you want to know a bit more about me."
            />
          </p>
          <div className="text-center">
            <a href="#About" className="btn btn-primary mt-16 w-40 h-8">
              {/* SOBRE MI */}
              <FormattedMessage id="home.btnAbout" defaultMessage="ABOUT ME" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Home };
