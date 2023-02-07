import './assets/styles.scss';
import { initCasesChart, initVaccinesChart } from './covid-chart';
import { initForm } from './form.js';

window.addEventListener('DOMContentLoaded', () => {
    initForm();
    initCasesChart();
    initVaccinesChart();
})