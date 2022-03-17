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
    //1. Fetch all the countries by using function `getLanguages`
    const data = await getLanguages();
    //2. Find the element with the id `languages-list`
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
//get Holiday list
//Render Holiday
//make Vietnam - 2021 as defaul
//change Holiday of country title
//list items inside Holiday of a Country container
//Adding Day, Year, Month
//Combine all queries (country, language)
//Add holiday name => list of matching name for all countries
const titleName = document.getElementById("title-name");
const inputCountry = document.querySelector("#country-query");
const inputYear = document.querySelector("#year-query");
const inputMonth = document.querySelector("#month-query");
const inputDay = document.querySelector("#day-query");
const inputSearch = document.querySelector("#search-query");
const inputLanguage = document.querySelector("#language-query");
inputCountry.value = "VN";
inputYear.value = "2021";

const getHolidays = async () => {
  //console.log(inputSearch.value);
  try {
    if (inputSearch.value === "") {
      const url = `https://holidayapi.com/v1/holidays?pretty&country=${inputCountry.value}&year=${inputYear.value}&month=${inputMonth.value}&day=${inputDay.value}&language=${inputLanguage.value}&key=${API_KEY}`;
    } else {
      const url = `https://holidayapi.com/v1/holidays?pretty&year=${inputYear.value}&month=${inputMonth.value}&day=${inputDay.value}&search=${inputSearch.value}&language=${inputLanguage.value}&key=${API_KEY}`;
    }
    //here is how we add a dynamic value (API KEY) to the url
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data); //have a look the retrieved data
    return data;
  } catch (err) {
    console.log("err", err);
  }
};
const changeCountry = async () => {
  try {
    const data = await getCountries();
    data.countries.find((country) => {
      if (country.code === inputCountry.value) {
        titleName.textContent = `Holidays of ${country.name}`;
      }
    });
  } catch (err) {
    console.log("err", err);
  }
};
const renderHolidays = async () => {
  try {
    //1. Fetch all the countries by using function `getHolidays`
    const data = await getHolidays();
    //2. Find the element with the id `holidays-list`
    const holidaysList = document.getElementById("holidays-list");
    //3. Take out the `ul` element
    const ulHolidaysList = holidaysList.children[1];
    //4. Delete the sample inside `ul` element
    ulHolidaysList.innerHTML = "";
    //5. Loop through the list of countries
    console.log(data.holidays);
    data.holidays.forEach((holiday, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${holiday.name}</div>
                <div class="li-text"> ${holiday.weekday.date.name} - ${
        holiday.date
      }</div>
            </div>`;
      //Then append them to the `ul` element
      ulHolidaysList.appendChild(x);
      //change Holiday of a Country Name:
      changeCountry();
    });
  } catch (err) {
    console.log("err", err);
  }
};
document.getElementById("holidays-btn").addEventListener("click", () => {
  renderHolidays();
});
