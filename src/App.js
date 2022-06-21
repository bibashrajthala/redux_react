import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

import WeatherForm from "./components/form";
import Weather from "./components/weather";

function App() {
  return (
    <div className="App">
      <WeatherForm />
      <Weather />
    </div>
  );
}

export default App;
