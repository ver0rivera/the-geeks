import { Notify } from "./notify.js";


function request(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
        });
    });
}


async function factAboutNumber(number) {
    let url = `http://numbersapi.com/${number}?json`;
    let body = await request(url);
    return body;
}

async function createFunFact(number, notify) {
    let numberFact = await factAboutNumber(number);

    notify.message = numberFact.text;
}    

const notify = new Notify("Welcome to my page!");
notify.show();
notify.showAfter(7 * 1000);

setInterval(function () {
    let number = Math.floor(Math.random() * 100);
    createFunFact(number, notify);
}, 7 * 1000);    








