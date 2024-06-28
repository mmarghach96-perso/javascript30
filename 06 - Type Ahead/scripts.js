const citiesEndPoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(citiesEndPoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

const findMatches = (cities, search) => {
  return cities.filter((place) => {
    const regex = new RegExp(search, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
};

const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

const searchForm = document.querySelector(".search");
searchForm.addEventListener("keyup", (event) => {
  const search = event.target.value;
  const matches = findMatches(cities, search);
  const suggestions = document.querySelector(".suggestions");

  suggestions.innerHTML = matches
    .map((place) => {
        const regex = new RegExp(search, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${search}</span>`);        
        const stateName = place.state.replace(regex, `<span class="hl">${search}</span>`);        
      return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
    `;
    }).join('');
});
