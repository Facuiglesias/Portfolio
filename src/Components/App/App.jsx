import { Header } from "../Header";
import { Home } from "../Home";
import { AboutMe } from "../AboutMe";
import { Projects } from "../Projects";
import { Contactame } from "../Contactame";
import { Referencias } from "../Referencias";
import { IntlProvider } from "react-intl";
import langEn from "../../lang/en-US.json";

function App() {
  return (
    <IntlProvider locale="en-US" messages={langEn}>
      <div className="App">
        <Header />
        <Home />
        <AboutMe />
        <Projects />
        <Referencias />
        <Contactame />
      </div>
    </IntlProvider>
  );
}

export default App;
