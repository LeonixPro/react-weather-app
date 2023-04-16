import styles from "./Header.module.css";
function Header({ weather }) {
  const time = Date().slice(16, 21);
  const date = Date().slice(0, 15);
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.img}>
          {weather?.main?.temp && (
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="Weather App"
            />
          )}
        </div>
        <div className={styles.temp}>
          {weather?.main?.temp && (
            <>
              {weather.main.temp.toFixed()}
              <span>°</span>
            </>
          )}
        </div>
        <div className={styles.location}>
          {weather?.main?.temp && `${weather.name}, ${weather.sys.country}`}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.time}>{time}</div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
}

export default Header;
