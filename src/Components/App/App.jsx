import { Header } from "../Header";
import { Inicio } from "../Inicio";
import { SobreMi } from "../SobreMi";
import { Proyectos } from "../Proyectos";
import { Contactame } from "../Contactame";
import { Referencias } from "../Referencias";

function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Referencias />
      <Contactame />
    </div>
  );
}

export default App;
