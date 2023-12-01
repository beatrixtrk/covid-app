export const loadCasesData = (country) => {
    try {
        const data = getCountryForCases(country);
        return data;
    } catch (error) {
        console.error('Error loading data', error);
        throw error;
    }
}

export const loadVaccinesData = (country) => {
    try {
        const data = getCountryForVaccines(country);
        return data;
    } catch (error) {
        console.error('Error loading data', error);
        throw error;
    }
}

const getCountryForCases = async (country) => {

    const response = await fetch(`https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/cases?country=${country}`);

    if (response.status !== 200) {
        throw 'Error loading cases data';
    }

    const jsonResponse = await response.json();
    return jsonResponse;
}

const getCountryForVaccines = async (country) => {

    const response = await fetch(`https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/vaccines?country=${country}`);

    if (response.status !== 200) {
        throw 'Error loading vaccines data';
    }

    const jsonResponse = await response.json();
    return jsonResponse;
}

export const showCasesData = (data) => {
    const container = document.getElementById('cases-data');
    const confirmed = data.confirmed.toLocaleString();
    const recovered = data.recovered.toLocaleString();
    const deaths = data.deaths.toLocaleString();
    const population = data.population.toLocaleString();
    const sq_km_area = data.sq_km_area.toLocaleString();
    const life_expectancy = data.life_expectancy;
    const continent = data.continent;
    const location = data.location;
    const capital_city = data.capital_city;
    const updated = data.updated;
    container.insertAdjacentHTML('afterbegin', `
        <div class="updated">
            <p>Last update: <span>${updated}</span></p>
        </div>
 
        <div class="cards">
            <div class="card">
                <p>Confirmed cases</p>
                <span>${confirmed}</span>
            </div>
            <div class="card">
                <p>Recovered</p>
                <span>${recovered}</span>
            </div>
            <div class="card">
                <p>Cases of death</p>
                <span>${deaths}</span>
            </div>
        </div>

        <div class="more-details">
            <div class="data">
                <p>Capital city</p>
                <span>${capital_city}</span>
            </div>
            <div class="data">
                <p>Population</p>
                <span>${population}</span>
            </div>
            <div class="data">
                <p>Life expectancy/p>
                <span>${life_expectancy} év</span>
            </div>
            <div class="data">
                <p>Continent</p>
                <span>${continent}</span>
            </div>
            <div class="data">
                <p>Location</p>
                <span>${location}</span>
            </div>
            <div class="data">
                <p>Area</p>
                <span>${sq_km_area} km2</span>
            </div>
        </div>
    `)
}

export const showVaccinesData = (data) => {
    const container = document.getElementById('vaccines-data');
    const administered = data.administered.toLocaleString();
    const people_vaccinated = data.people_vaccinated.toLocaleString();
    const population = data.population.toLocaleString();
    const sq_km_area = data.sq_km_area.toLocaleString();
    const life_expectancy = data.life_expectancy;
    const continent = data.continent;
    const location = data.location;
    const capital_city = data.capital_city;
    const updated = data.updated;
    container.insertAdjacentHTML('afterbegin', `
        <div class="updated">
            <p>Last update: <span>${updated}</span></p>
        </div>
 
        <div class="cards">
            <div class="card">
                <p>Administered</p>
                <span>${administered}</span>
            </div>
            <div class="card">
                <p>Vaccinated</p>
                <span>${people_vaccinated}</span>
            </div>
        </div>

        <div class="more-details">
            <div class="data">
                <p>Capital city</p>
                <span>${capital_city}</span>
            </div>
            <div class="data">
                <p>Population</p>
                <span>${population}</span>
            </div>
            <div class="data">
                <p>Life expectancy</p>
                <span>${life_expectancy} év</span>
            </div>
            <div class="data">
                <p>Continet</p>
                <span>${continent}</span>
            </div>
            <div class="data">
                <p>Location</p>
                <span>${location}</span>
            </div>
            <div class="data">
                <p>Area</p>
                <span>${sq_km_area} km2</span>
            </div>
        </div>
    `)
}