import Chart from 'chart.js/auto';
import { loadCasesData, loadVaccinesData } from './api';


export const initCasesChart = () => {

    const countries = ["Hungary", "France", "Slovakia", "Slovenia", "Austria", "Romania"];
    const casesData = [];

    countries.forEach(async (c, index) => {
        const d = await loadCasesData(c);
        casesData[index] = { country: d.country, confirmed: d.confirmed }
        return casesData;
    })

    setTimeout(() => {
        new Chart(
            document.getElementById('cases-chart'),
            {
                type: 'bar',
                data: {
                    labels: casesData.map(row => row.country),
                    datasets: [
                        {
                            label: 'Numbers of Confirmed Cases',
                            data: casesData.map(row => row.confirmed)
                        }
                    ]
                }
            }
        );
    }, 1000);
}

export const initVaccinesChart = () => {

    const countries = ["Hungary", "France", "Slovakia", "Slovenia", "Austria", "Romania"];
    const vaccinesData = [];

    countries.forEach(async (c, index) => {
        const d = await loadVaccinesData(c);
        vaccinesData[index] = { country: d.country, people_vaccinated: d.people_vaccinated }
        return vaccinesData;
    })

    setTimeout(() => {

        new Chart(
            document.getElementById('vaccines-chart'),
            {
                type: 'bar',
                data: {
                    labels: vaccinesData.map(row => row.country),
                    datasets: [
                        {
                            label: 'Numbers of Vaccinated',
                            data: vaccinesData.map(row => row.people_vaccinated)
                        }
                    ]
                }
            }
        );
    }, 1000);
}