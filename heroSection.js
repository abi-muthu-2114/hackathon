import { realEstateData } from './index.js'

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('display-properties');

    // Loop through the constant array and create HTML content
    MY_CONSTANT_ARRAY.forEach(item => {
        const paragraph = document.createElement('p');
        paragraph.textContent = item;
        container.appendChild(paragraph);
    });
});