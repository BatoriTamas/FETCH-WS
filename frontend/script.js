const rootElement = document.getElementById("root");

const composeHtml = function () {
  rootElement.insertAdjacentHTML("beforeend", `
    <h2> Photo by ${data.copyriht} on > ${data.datel}</h2>
    <p> ${data.explanation}</p>
    <img src= "${data.url}" />
    `)
}

fetch("https://api.nasa.gov/planetary/apod?api_key=QdweucGyyyZpL97LsOhwbpGzD9y2QvcsnaUOjCsX")
  .then(function (response) {
      console.log(response);
      throw new Error ("Hibás kód");
      return response.json();
  })
  .then(function (data) {
    console.log(data);
    composeHtml(data);
  })
.catch(function(error) {
  console.log();
})

