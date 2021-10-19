document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&appid=8d9addb0dbe09906c1509eaeeb7b28cf";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
          results += '<h2>Weather in ' + json.name + "</h2>";
          for (let i=0; i < json.weather.length; i++) {
    	results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
          }
          results += '<h2>' + json.main.temp + " &deg;F</h2>"
          results += "<p>"
          for (let i=0; i < json.weather.length; i++) {
    	results += json.weather[i].description
    	if (i !== json.weather.length - 1)
    	  results += ", "
          }
          results += "</p>";
          document.getElementById("weatherResults").innerHTML = results;
    });

    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=08e478a10013af859188d8b366b0cfc9";
    fetch(url2)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let forecast = "";
  for (let i=0; i < json.list.length; i++) {

forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
forecast += "<p>Temperature: " + json.list[i].main.temp + " | Sea Level: " + json.list[i].main.sea_level + " | Humidity: " + json.list[i].main.humidity +"</p>";
// forecast += "<p>Sea Level: " + json.list[i].main.sea_level + "</p>"; // add more stuff like this for more specs  look in "fields in API response" or command F wind
// forecast += "<p>Humidity: " + json.list[i].main.humidity + "</p>";
// forecast += "<p>temp min: " + json.list[i].main.temp_min + "</p>";
forecast += "<p>Wind Speed: " + json.list[i].wind.speed + " "+"| Minimum Temperature: " + json.list[i].main.temp_min + "</p>";


  }
  document.getElementById("forecastResults").innerHTML = forecast;

      });


});
