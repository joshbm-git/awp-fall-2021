const fetch = require("node-fetch");

fetch("https://api.genderize.io/?name[]=peter&name[]=lois&name[]=stevie")
  .then(res => res.json())
  .then(data => {
    for (let person of data) {
      console.log(person.name, person.gender);
    }      
  });
