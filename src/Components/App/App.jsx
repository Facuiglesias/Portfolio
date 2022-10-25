import { Header } from "../Header";
import { Inicio } from "../Inicio";
import { SobreMi } from "../SobreMi";
import { Proyectos } from "../Proyectos";
import { Contactame } from "../Contactame";

function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Contactame />
    </div>
  );
}

export default App;
