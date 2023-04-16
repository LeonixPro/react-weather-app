export const getWeather = async (location) => {
  try {
    const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/${location}`);
    const response = await request;
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("There was an error");
  }
};
