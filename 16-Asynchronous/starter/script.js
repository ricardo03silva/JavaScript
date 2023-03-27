'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//https://restcountries.com/v2/
const renderCountry = (data, className = '') => {
    const html = `
        <article class="country ${className}">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
              </div>
            </article>
        `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = (msg) => {
    countriesContainer.insertAdjacentText('beforeend', msg);
};

// const getCountryData = (country) => {
//     const request = new XMLHttpRequest(); //not used anymore
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load', () => {
//         const [data] = JSON.parse(request.responseText);
//         //render html
//         renderCountry(data);
//         // console.log(data);

//         //get neighbour
//         const [neighbour] = data.borders;
//         if (!neighbour) return;

//         const request2 = new XMLHttpRequest(); //not used anymore
//         request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load', () => {
//             const data2 = JSON.parse(request2.responseText);
//             renderCountry(data2, 'neighbour');
//         });
//     });
// };

// getCountryData('portugal');

//Promise: container for future value (response from AJAX call)
// const newGetData = (country) => {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then((response) => {
//             return response.json();
//         })
//         .then((response) => {
//             console.log(response);
//             renderCountry(response[0]);
//         });
// };
const getJSON = (url, msg = 'Something Wrong') => {
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`${msg} (${response.status})`);
        }
        return response.json();
    });
};

// const getData = (country) => {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`Country not found (${response.status})`);
//             }
//             return response.json();
//         })
//         .then((response) => {
//             renderCountry(response[0]);
//             const neighbour = response[0].borders[0];
//             if (!neighbour) return;

//             return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`Country not found (${response.status})`);
//             }
//             return response.json();
//         })
//         .then((response) => renderCountry(response, 'neighbour'))
//         .catch((err) => {
//             renderError(`Error: ${err.message}`);
//             console.error(err.message);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// };

const getData = (country) => {
    getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not Found')
        .then((response) => {
            renderCountry(response[0]);
            const neighbour = response[0].borders[0];
            if (!neighbour) {
                const msg = `No neighbour`;
                throw new Error(msg);
            }

            return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not Found');
        })
        .then((response) => renderCountry(response, 'neighbour'))
        .catch((err) => {
            renderError(`Error: ${err.message}`);
            console.error(err.message);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener('click', () => {
    getData('australia');
});
