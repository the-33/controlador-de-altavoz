const titulo = document.getElementById('titulo');

const request = new XMLHttpRequest();
request.open("GET", "http://192.168.1.201/httpapi.asp?command=getPlayerStatus");
request.responseType = "json";
request.send();
request.onload = function () {
  const informacion = request.response;
  document.getElementById('titulo').innerHTML = informacion["Title"];
  document.getElementById('titulo').innerHTML = informacion["Artist"];
};
