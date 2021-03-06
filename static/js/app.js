// from data.js
var tableData = data;

// select table body
var tbody = d3.select("tbody");

// populate table body
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.values(ufo).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

// select the button
var button = d3.select("#filter-btn");

// select the form
var form = d3.select("form");

// create event handlers 
button.on("click",runEnter);
form.on("submit",runEnter);

// event handler function for the form
function runEnter() {

  // prevent the page from refreshing
  d3.event.preventDefault();
  
  // select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  // present data based on input value provided
  if (inputValue === "") {
    // no input value provided 
    var filteredData = tableData;
  }
  else {
    // filter data based on the input value provided
    var filteredData = tableData.filter(date => date.datetime === inputValue);
  };

  console.log(filteredData);

  // delete all data from table
  d3.selectAll("td").remove();

  // append rows for input value provided
  filteredData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.values(ufo).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};