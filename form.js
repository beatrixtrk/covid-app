import { loadCasesData, loadVaccinesData, showCasesData, showVaccinesData } from "./api.js";

export const initForm = () => {
    const countries = ["Hungary", "France", "Slovakia", "Slovenia", "Austria", "Romania"];
    const casesFormSelect = document.querySelector('#cases-country option');
    const vaccinesFormSelect = document.querySelector('#vaccines-country option');
    const formCases = document.getElementById('form-cases');
    const formVaccines = document.getElementById('form-vaccines');
    const errorBlock = document.getElementById('error-block');
    const casesDataContainer = document.getElementById('cases-data');
    const vaccinesDataContainer = document.getElementById('vaccines-data');

    countries.forEach((country) => {
        casesFormSelect.insertAdjacentHTML('afterend', `<option value="${country}">${country}</option>`);
        vaccinesFormSelect.insertAdjacentHTML('afterend', `<option value="${country}">${country}</option>`);
    });

    formCases.addEventListener('change', async () => {

        const dataContainer = document.getElementById('cases-data');
        dataContainer.innerHTML = '';

        const selectValue = document.getElementById('cases-country').value;

        casesDataContainer.insertAdjacentHTML('afterbegin', `<div id="loading-indicator" class="loader"></div>`);

        try {
            const casesData = await loadCasesData(selectValue);
            showCasesData(casesData);
        } catch (error) {
            console.log(error);
            errorBlock.style.display = 'block';
            setTimeout(() => errorBlock.style.display = 'none', 2000);
        }

        casesDataContainer.removeChild(document.getElementById('loading-indicator'));
    });

    formVaccines.addEventListener('change', async () => {

        const dataContainer = document.getElementById('vaccines-data');
        dataContainer.innerHTML = '';

        const selectValue = document.getElementById('vaccines-country').value;

        vaccinesDataContainer.insertAdjacentHTML('afterbegin', `<div id="loading-indicator" class="loader"></div>`);

        try {
            const vaccinesData = await loadVaccinesData(selectValue);
            showVaccinesData(vaccinesData);
        } catch (error) {
            errorBlock.style.display = 'block';
            setTimeout(() => errorBlock.style.display = 'none', 2000);
        }

        vaccinesDataContainer.removeChild(document.getElementById('loading-indicator'));

    });
}

