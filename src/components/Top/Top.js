import styles from "./Top.module.css";
function Top({ getLocation, changeTheme, theme }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Weather React App</div>
      <div className={styles.search}>
        <input
          type="text"
          className={theme === false ? styles.dark : null}
          placeholder="Choose the location"
          onKeyDown={getLocation}
        />
      </div>

      {theme === true ? (
        <button className={styles.theme} onClick={changeTheme}>
          Dark theme
        </button>
      ) : (
        <button className={styles.light} onClick={changeTheme}>
          Light theme
        </button>
      )}
    </div>
  );
}

export default Top;
