import "../components/navbar.js";
import "../components/covid19-banner";
import "../components/covid19-data";
import "../components/covid19-content";
import "../components/covid19-footer";

const main = () => {
  const baseUrl = "https://covid19.mathdro.id/api/countries/Indonesia/";

  const getData = () => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((results) => {
        const covid19DataElement = document.querySelector("covid19-data");
        covid19DataElement.covid19DataItem = results;
      })
      .catch(() => showMessage());
  };

  const showMessage = (message = "No internet connection...") => {
    alert(message);
  };

  getData();
};

export default main;
