const baseURL = 'https://ghibliapi.herokuapp.com/people/';
const searchTerm = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const body = document.querySelector('body');
let url;
const searchForm =document.querySelector("form");

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    url = `${baseURL}`;

    fetch(url)
    .then(function(result) {
        return result.json();
    })
    .then(function(json) {
        displayResults(json);
    })
    function displayResults(json) {
         let people = json;
         console.log(people);
         for (p of people) {
          let name = document.createElement("h1");
        //   let age = document.createElement("h2");
        //   let gender = document.createElement("h3");
          name.innerText = p.name;
        //   age.innterText = p.age;
        //   gender.innterText = p.gender;
          body.appendChild(name);
        //   body.appendChild(age);
        //   body.appendChild(gender);
        }
        }
    }