// const fetch = require('node-fetch')   // for run in node consol

fetch('https://restcountries.eu/rest/v2/all')
    .then((res) => res.json())
    .then((data) => displayCountries(data))

const displayCountries = (countries) => {
    // console.log(countries)

    const countriesDiv = document.getElementById('countries')

    // :::::::::::::: using for loop ::::::::::

    // for (let i = 0; i < countries.length; i++) {
    //     const countryDiv = document.createElement('div')
    //     countryDiv.className = 'country'

    //     // const name = document.createElement('h3')
    //     // const capital = document.createElement('p')

    //     // name.innerText = countries[i].name
    //     // capital.innerText = countries[i].capital

    //     // countryDiv.appendChild(name)
    //     // countryDiv.appendChild(capital)

    //     const country = countries[i]
    //     const countryInfo = `
    //     <h3 id='cname'> ${country.name}  </h3>
    //     <p> ${country.capital} </p>
    //     `
    //     countryDiv.innerHTML = countryInfo

    //     countriesDiv.appendChild(countryDiv)
    // }

    // :::::::::: using for eatch ::::::::
    countries.forEach((country) => {
        const countryDiv = document.createElement('div')
        countryDiv.className = 'country'

        const countryInfo = `
        <a href='' onclick="displayCountryDetail('${country.name}')" >
    <h3 id='cname'> ${country.name}  </h3>
    <p> ${country.capital} </p>
    </a>
    `
        countryDiv.innerHTML = countryInfo

        countriesDiv.appendChild(countryDiv)
    })
}

const displayCountryDetail = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    // console.log(url)
    fetch(url)
        .then((res) => res.json())
        .then((data) => renderCountryInfo(data[0]))
}

renderCountryInfo = (country) => {
    console.log(country)
    const countryInfoDiv = document.getElementById('CountryDetail')
    countryInfoDiv.innerHTML = `
    <h1> ${country.name} </h1>
    <p>Population: ${country.population} </p>
    <p>Area: ${country.area} square KM </p>
    <p>Region: ${country.region} (${country.subregion}) </p>
    <p>Currency: ${country.currencies[0].name} ${country.currencies[0].symbol} </p>
    <img src="${country.flag}">
    
    `
}
