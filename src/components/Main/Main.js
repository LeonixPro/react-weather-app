import styles from "./Main.module.css";
import { date } from "../../services/date";
function Main({ weather, theme }) {
  // const sunset = new Date(weather?.sys?.sunset * 1000);
  return (
    <>
      {weather?.main?.temp && (
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <ul className={styles.weatherDetails}>
              <li>
                <span className={styles.weatherImg}>
                  <i className="bi bi-droplet-half"></i>
                </span>
                <span>
                  <b>Humidity</b>
                  {`${weather?.main?.humidity} %`}
                </span>
              </li>
              <li>
                <span className={styles.weatherImg}>
                  <i className="bi bi-arrow-down-up"></i>
                </span>
                <span>
                  <b>Pressure</b>
                  {`${weather?.main?.pressure} hPa`}
                </span>
              </li>
              <li>
                <span className={styles.weatherImg}>
                  <i className="bi bi-clouds-fill"></i>
                </span>
                <span>
                  <b>Cloudiness</b>
                  {weather?.main?.temp && `${weather.clouds.all} %`}
                </span>
              </li>
              <li>
                <span className={styles.weatherImg}>
                  <i className="bi bi-eye"></i>
                </span>
                <span>
                  <b>Visibility</b>
                  {weather?.main?.temp && `${weather.visibility / 1000} km`}
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.rightBox}>
              <div className={styles.rightFirst}>
                <div
                  className={
                    theme === true
                      ? styles.feels
                      : `${styles.feels} ${styles.dark}`
                  }
                >
                  <span>Feels like</span>
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt="Weather"
                  />
                  <b>{weather.main.feels_like.toFixed()} °</b>
                </div>
                <div
                  className={
                    theme === true
                      ? styles.description
                      : `${styles.description} ${styles.dark}`
                  }
                >
                  <span>Description</span>
                  <i className="bi bi-clouds"></i>
                  <b>{weather.weather[0].main}</b>
                  <b>{weather.weather[0].description}</b>
                </div>
                <div
                  className={
                    theme === true
                      ? styles.description
                      : `${styles.description} ${styles.dark}`
                  }
                >
                  <span>Wind</span>
                  <i className="bi bi-wind"></i>
                  <b>Wind speed</b>
                  <b>{weather.wind.speed} m/s</b>
                </div>
                <div
                  className={
                    theme === true
                      ? styles.description
                      : `${styles.description} ${styles.dark}`
                  }
                >
                  <span>Wind degree</span>
                  <i className="bi bi-arrow-down-left-circle"></i>
                  <b>Wind degree</b>
                  <b>{weather.wind.deg} deg</b>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.secondLeft}>
            <div className={styles.weatherAdditional}>
              <div>
                <b>Max temperature</b>{" "}
                <span>{weather.main.temp_max.toFixed()} °</span>
              </div>
              <div>
                <b>Min temperature</b>{" "}
                <span>{weather.main.temp_min.toFixed()} °</span>
              </div>
              <div>
                Difference
                <span>
                  {weather.main.temp_max.toFixed() -
                    weather.main.temp_min.toFixed()}{" "}
                  °
                </span>
              </div>
            </div>
          </div>
          <div className={styles.secondRight}>
            <div className={styles.rightSecond}>
              <div className={styles.sunrise}>
                <span>
                  <i className="bi bi-sunrise"></i>
                </span>
                <span>
                  <b>Sunrise</b>
                  {date(weather?.sys?.sunrise)}
                </span>
              </div>
              <div className={styles.sunset}>
                <span>
                  <i className="bi bi-sunset"></i>
                </span>
                <span>
                  <b>Sunset</b>
                  {date(weather?.sys?.sunset)} <br />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>Copyright © Levon Aramyan</div>
        </div>
      )}
    </>
  );
}

export default Main;
