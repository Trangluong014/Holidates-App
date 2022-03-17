const API_KEY = "f9f8abfb-4c8e-4a4e-b998-d5c517443821";

const getCountries = async () => {
  try {
    const url = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`;
    //here is how we add a dynamic value (API KEY) to the url
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data); //have a look the retrieved data
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

const renderCountries = async () => {
  try {
    //1. Fetch all the countries by using function `getCountries`
    const data = await getCountries();
    //2. Find the element with the id `countries-list`
    const countriesList = document.getElementById("countries-list");
    //3. Take out the `ul` element
    const ulCountriesList = countriesList.children[2];
    //4. Delete the sample inside `ul` element
    ulCountriesList.innerHTML = "";
    //5. Loop through the list of countries
    data.countries.forEach((country, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${country.name}</div>
                <div>Code: ${country.code}</div>
            </div>`;
      //Then append them to the `ul` element
      ulCountriesList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};
document.getElementById("countries-list-btn").addEventListener("click", () => {
  renderCountries();
});

//Function Render Language List
//get language list
//render language list
//list items inside Language List container

const getLanguages = async () => {
  try {
    const url = `https://holidayapi.com/v1/languages?pretty&key=${API_KEY}`;
    //here is how we add a dynamic value (API KEY) to the url
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data); //have a look the retrieved data
    return data;
  } catch (err) {
    console.log("err", err);
  }
};
const renderLanguages = async () => {
  try {
    //1. Fetch all the countries by using function `getCountries`
    const data = await getLanguages();
    //2. Find the element with the id `countries-list`
    const languagesList = document.getElementById("languages-list");
    //3. Take out the `ul` element
    const ulLanguagesList = languagesList.children[2];
    //4. Delete the sample inside `ul` element
    ulLanguagesList.innerHTML = "";
    //5. Loop through the list of countries
    data.languages.forEach((language, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${language.name}</div>
                <div>Code: ${language.code}</div>
            </div>`;
      //Then append them to the `ul` element
      ulLanguagesList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};
document.getElementById("languages-list-btn").addEventListener("click", () => {
  renderLanguages();
});

//Function Render Holiday
//make Vietnam - 2021 as defaul
//change Holiday of country title
//list items inside Holiday of a Country container
//Adding Day, Year, Month
//Combine all queries (country, language)
//Add holiday name => list of matching name for all countries
