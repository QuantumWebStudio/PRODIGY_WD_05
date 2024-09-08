const errorSection = document.getElementById("errorSection");
const displayInfo = document.getElementById("displayInfo");
const sendDetails = () => {
  const cityName = document.getElementById("city").value;
  getWeatherDetails(cityName);
};

const getWeatherDetails = async (cityName) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=d403f92fca4e4377995134234241704&q=${cityName}&aqi=yes`
    );
    const weatherData = await response.json();
    if (response.status === 400) {
      errorSection.classList.remove("hidden");
      errorSection.classList.add("flex");
      displayInfo.classList.remove("flex");
      displayInfo.classList.add("hidden");
    }
    if (response.status === 200) {
      displayWeatherDetails(weatherData);
    }
  } catch (error) {
    console.log(error);
  }
};

const displayWeatherDetails = (weatherData) => {
  errorSection.classList.remove("flex");
  errorSection.classList.add("hidden");
  displayInfo.classList.remove("hidden");
  displayInfo.classList.add("flex");
  const { temp_c, temp_f, humidity, is_day, wind_kph } = weatherData.current;
  const { country, localtime, name, region } = weatherData.location;
  const displayCity = (document.getElementById("displayCity").innerText = name);
  const displayCountry = (document.getElementById("displayCountry").innerText = country);
  const displayRegion = (document.getElementById("displayRegion").innerText = region);
  const displayDateTime = (document.getElementById("displayDateTime").innerText = localtime);
  const displayTempC = (document.getElementById("displayTempC").innerText = `${temp_c}°C`);
  const displayWindSpeend = (document.getElementById("displayWindSpeend").innerText = `${wind_kph}kmph`);
  const displayTempF = (document.getElementById("displayTempF").innerText = `${temp_f}°F`);
  const displayHumidity = (document.getElementById("displayHumidity").innerText = humidity);
  const displayDay = document.getElementById("displayDay");
  switch (is_day) {
    case 0:
      displayDay.innerText = "Sunday";
      break;
    case 1:
      displayDay.innerText = "Monday";
      break;
    case 2:
      displayDay.innerText = "Tuesday";
      break;
    case 3:
      displayDay.innerText = "Wednesday";
      break;
    case 4:
      displayDay.innerText = "Thursday";
      break;
    case 5:
      displayDay.innerText = "Friday";
      break;
    case 6:
      displayDay.innerText = "Saturday";
      break;
    default:
      break;
  }
};
