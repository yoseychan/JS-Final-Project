var url = 'https://openweathermap.org/data/2.5/weather?appid=b6907d289e10d714a6e88b30761fae22&id=456169&units=metric';
var request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();



request.onload = function () {
  console.log(request.response);
  console.log(request.response.weather.description);
  
  document.getElementById('temp').innerHTML = "Curently: "  + Math.round(request.response.main.temp)  + '&#176;C';
//   document.getElementById("w1").innerHTML = "url('../img/gallery/weather/" + request.response.weather.id + "')";
}