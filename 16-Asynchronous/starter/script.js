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
    countriesContainer.style.opacity = 1;
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
            if (!neighbour) throw new Error('No neighbour');

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

//Challenge 01
const whereAmI = (lat, lng) => {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Wait a few seconds and reload again');
            }
            return response.json();
        })
        .then((response) => {
            const msg = `You are in ${response.city}, ${response.countryName}`;
            console.log(msg);
        })
        .catch((err) => console.error(err));
};
// whereAmI(19.037, 72.873);

const whereAmI2 = (lat, lng) => {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`(${response.status}): ${response.statusText}`);
            }
            return response.json();
        })
        .then((response) => {
            console.log(`You are in ${response.city}, ${response.countryName}`);
            getData(response.countryName);
        })
        .catch((err) => console.error(err));
};
// whereAmI2(-33.933, 18.474);

// //Event Loop
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then((res) => console.log(res));
// console.log('Test end');
/*OUTPUT
--estes 2 console.log correm fora da callback queue e executam primeiro
LINE 164: Test start
LINE 167: Test end
--depois vem o seguinte:
LINE 166: Resolved promise 1 //promisse gera uma micro task que tem prioridade em relacao à callback queue por isso vem primeiro que '0 sec timer'
LINE 165: 0 sec timer //vai para a callback queue
*/

// //Building a Promisse
// //assegurar que codigo assincrono corre de forma ordenada
// const lotteryPromise = new Promise(function (resolve, reject) {
//     console.log('Lottery Happening');
//     setTimeout(() => {
//         if (Math.random() >= 0.5) {
//             resolve('You Win');
//         } else {
//             reject(new Error('You Lost'));
//         }
//     }, 2000);
// });

// lotteryPromise
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((err) => console.error(err));

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};
// wait(2)
//     .then(() => {
//         console.log('Waited for 2 seconds');
//         return wait(1);
//     })
//     .then(() => {
//         console.log('Waited for 1 second');
//     });

const getPosition = () => {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI3 = () => {
    getPosition()
        .then((pos) => {
            const { latitude: lat, longitude: lng } = pos.coords;
            return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`(${response.status}): ${response.statusText}`);
            }
            return response.json();
        })
        .then((response) => {
            console.log(`You are in ${response.city}, ${response.countryName}`);
            getData(response.countryName);
        })
        .catch((err) => console.error(err));
};
// whereAmI3();

// //Chalenge 02
// const imagesContainer = document.querySelector('.images');

// const createImage = (imgPath) => {
//     return new Promise(function (resolve, reject) {
//         const img = document.createElement('img');
//         img.src = imgPath;

//         img.addEventListener('load', () => {
//             imagesContainer.append(img);
//             resolve(img);
//         });

//         img.addEventListener('error', () => {
//             reject(new Error('Img failed loading'));
//         });
//     });
// };

// let current;

// createImage('img/img-1.jpg')
//     .then((response) => {
//         current = response;
//         console.log('Img1 loaded');
//         return wait(5);
//     })
//     .then(() => {
//         current.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then((response) => {
//         current = response;
//         return wait(5);
//     })
//     .then(() => {
//         current.style.display = 'none';
//     })
//     .catch((err) => {
//         console.error(err);
//     });

//the same as: fetch(`https://restcountries.com/v2/name/${country}`).then(...)
//Async and Await and try...catch
//async simplifies promises consuming
const newLocation = async () => {
    try {
        //geolocation
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;

        //reverse geocoding
        const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
        if (!resGeo.ok) throw new Error('Error in reverse geocoding');
        const dataGeo = await resGeo.json();

        //get country data
        const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryName}`);
        if (!res.ok) throw new Error('Not able to get country data');
        const resJSON = await res.json();
        renderCountry(resJSON[0]);

        return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
    } catch (err) {
        console.error(err);
    }
};

// (async () => {
//     console.log('1');
//     try {
//         const city = await newLocation();
//         console.log(`2 ${city}`);
//     } catch (err) {
//         console.error(err);
//     }
//     console.log('3');
// })();

const getCapitals = async (c1, c2, c3) => {
    try {
        //one at a time
        // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
        // console.log([data1.capital, data2.capital, data3.capital]);

        //all at the same time: check network tab in dev tools
        const data = await Promise.all([getJSON(`https://restcountries.com/v2/name/${c1}`), getJSON(`https://restcountries.com/v2/name/${c2}`), getJSON(`https://restcountries.com/v2/name/${c3}`)]);

        console.log(data.map((el) => el[0].capital));
    } catch (err) {
        console.error(err);
    }
};

getCapitals('portugal', 'spain', 'italy');
