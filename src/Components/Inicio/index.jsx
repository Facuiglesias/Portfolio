function Inicio() {
  return (
    <div id="Introduction" className="hero min-h-screen bg-background bg-cover">
      <div className="hero-content text-justify text-primary-content">
        <div className="max-w-7xl">
          <h1 className="mb-8 text-8xl font-bold">
            Hola! Soy Facundo Iglesias
          </h1>
          <p className="mb-8 text-6xl underline underline-offset-[40px]">
            Desarrollador Web | Front-END Dev
          </p>
          <p className="mb-8 mt-16 text-4xl">
            Soy un joven programador amante de la tecnología, con experiencia en
            el desarrollo de paginas web.
          </p>
          <div className="text-center">
            <a href="#About" className="btn btn-primary mt-16 w-40 h-8">
              SOBRE MI
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Inicio };
