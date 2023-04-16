import { useState } from "react";
import "./assets/main.css";
import Main from "./components/Main/Main";
import Top from "./components/Top/Top";
import Header from "./components/Header/Header";
import { getWeather } from "./services/request";
function App() {
  const [theme, setTheme] = useState(true);
  const [weather, setWeather] = useState({});
  const getLocation = (e) => {
    const city = e.target.value;
    if (e.key === "Enter") {
      e.target.value = "";
      getWeather(city).then((result) => setWeather(result));
    }
  };

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className="container-fluid" id={theme === true ? "light" : "dark"}>
      <div className="container">
        <Top
          getLocation={getLocation}
          changeTheme={changeTheme}
          theme={theme}
        />
        <Header weather={weather} />
        <div className="wrapper">
          <Main weather={weather} theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default App;
