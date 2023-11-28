//  A. Code To Get All The Countries From Asia Continent / Region Using Filter Function:

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var result = JSON.parse(request.response);
  console.log(result);

  for (i = 0; i <= result.length - 1; i++) {
    var continentsResult = result.filter((ele) => ele.continents == "Asia");
    var continentsResult = continentsResult.map((ele) => ele.continents);
    console.log(continentsResult);

    //  Code To Get All The Countries From Asia Continent / Region Using Filter Function:

    var regionResult = result.filter((ele) => ele.region == "Asia");
    var regionResult = regionResult.map((ele) => ele.region);
    console.log(regionResult);

    //  B. Code To Get Countries With A Population Less Than 2 Lakh Using Filter Function:

    var populationResult = result.filter((ele) => ele.population <= "200000");
    var populationResult = populationResult.map((ele) => ele.population);
    console.log(populationResult);

    //  C. Print The Following Details Name, Capital, Flag Using forEach Function
    var data = result;
    var countryName = data.forEach((element) =>
      console.log(element.name.common)
    );
    var capital = data.forEach((element) => console.log(element.capital));
    var flag = data.forEach((element) => console.log(element.flags));

    //  D. Total Population of Countries Using Reduce Function:
    var totalPopulation = result.filter((ele) => ele.population);
    var totalPopulation = totalPopulation.map((ele) => ele.population);
    var totalPopulation = totalPopulation.reduce((acc, ele) => acc + ele);
    console.log(totalPopulation); //Total Population - 7777721563

    //  E. Countries That Uses USD As Currency:
    var currencyResult = result.filter((ele) => (ele.currencies = "USD"));
    var currencyResult = result.map((ele) => ele.name.common);
    console.log(currencyResult);
  }
};
