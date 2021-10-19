// document.getElementById("weatherSubmit").addEventListener("click", function(event) {
document.getElementById("numberSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("luckyNumber").value;
  if (value === "")
    return;
  console.log(value);




// https://api.adviceslip.com/
  const url = "http://numbersapi.com/" + value
  fetch(url)
  .then(function(response) {
    return response.text();
  }).then(function(text) {
    console.log(text);


    let results = "";

       results += '<h2> Fun Fact about #' + value + ': ' + text + '</h2>';
        results += '<h2> I bet you never knew this about the number or date ' + value + ' did you! </p>'
       results += '<h2> Try putting in your birthday to see what cool things happened on the day your were born! </h2>'
       results += '<h2> Try putting in your age to see what is special about that number </h2>'
       results += '<h2> Perhaps a war ended on one of your parents birthdays, you better go check! </h2>'
       results += '<br/>'
       results += '<h2> I hope you enjoyed visiting my website and learning something you didn\'t know previously! </h2>'

       document.getElementById("weatherResults").innerHTML = results;
  });


    });

    // //The console.log is working but printing it on the website is not yet working
    // fetch(url)
    // .then(response => response.text())
    // .then(data => console.log(data));
    // let results = "";
    // results += '<h1> + Please Print Anything </p>';
    //  results += '<p> Daily advice ' + text.id  + '</p>';
    // document.getElementById("weatherResults").innerHTML = results;
