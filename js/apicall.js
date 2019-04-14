var url = 'https://openweathermap.org/data/2.5/weather?appid=b6907d289e10d714a6e88b30761fae22&id=456169&units=metric';
var request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();



request.onload = function () {
var weather = request.response.weather[0].main;

  
  document.getElementById('temp').innerHTML = "Curently it's "  + Math.round(request.response.main.temp)  + '&#176;C';

  // ! ! ! I HAD TO ADD THE "/Js-Final-Project" folder otherwise it would not work
  // if it does not work please try removing "/Js-Final-Project" from the url
  document.getElementById("w1").style.backgroundImage = "url('../Js-Final-Project/img/weather/" + weather.toLowerCase() + ".png')";
}


// form validation for reservation details

function validate() {
  var personsVal = document.getElementById("persons").value;
  var persons = document.getElementById("persons");
  var passes = true;

  if (personsVal === "") { 
    document.getElementById("typeError1").innerHTML = "Cannot be empty";
    persons.style.border = "1px solid red";
    passes = false;
  }
  if (isNaN(personsVal)) { 
    document.getElementById("typeError2").innerHTML = "It must be a number!";
    persons.style.border = "1px solid red";
    passes = false;
  }
  if (personsVal.indexOf(" ") !== -1) { 
    document.getElementById("typeError3").innerHTML = "Cannot contain spaces";
    persons.style.border = "1px solid red";
    passes = false;
  }
  if (personsVal > 7 || personsVal < 1) { 
    document.getElementById("typeError4").innerHTML = "Min.1 person, max. 7 persons";
    persons.style.border = "1px solid red";
    passes = false;
  }

  return passes;
}