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
            <p>Utoljára frissítve: <span>${updated}</span></p>
        </div>
 
        <div class="cards">
            <div class="card">
                <p>Igazolt esetek</p>
                <span>${confirmed}</span>
            </div>
            <div class="card">
                <p>Gyógyultak</p>
                <span>${recovered}</span>
            </div>
            <div class="card">
                <p>Halálesetek</p>
                <span>${deaths}</span>
            </div>
        </div>

        <div class="more-details">
            <div class="data">
                <p>Főváros</p>
                <span>${capital_city}</span>
            </div>
            <div class="data">
                <p>Népesség</p>
                <span>${population}</span>
            </div>
            <div class="data">
                <p>Várható élettartam</p>
                <span>${life_expectancy} év</span>
            </div>
            <div class="data">
                <p>Kontinens</p>
                <span>${continent}</span>
            </div>
            <div class="data">
                <p>Elhelyezkedés</p>
                <span>${location}</span>
            </div>
            <div class="data">
                <p>Terület</p>
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
            <p>Utoljára frissítve: <span>${updated}</span></p>
        </div>
 
        <div class="cards">
            <div class="card">
                <p>Regisztrált</p>
                <span>${administered}</span>
            </div>
            <div class="card">
                <p>Beoltottak</p>
                <span>${people_vaccinated}</span>
            </div>
        </div>

        <div class="more-details">
            <div class="data">
                <p>Főváros</p>
                <span>${capital_city}</span>
            </div>
            <div class="data">
                <p>Népesség</p>
                <span>${population}</span>
            </div>
            <div class="data">
                <p>Várható élettartam</p>
                <span>${life_expectancy} év</span>
            </div>
            <div class="data">
                <p>Kontinens</p>
                <span>${continent}</span>
            </div>
            <div class="data">
                <p>Elhelyezkedés</p>
                <span>${location}</span>
            </div>
            <div class="data">
                <p>Terület</p>
                <span>${sq_km_area} km2</span>
            </div>
        </div>
    `)
}