console.log("Hello Typescript");
// Implicit Types
var helloWorld = "Hello World";
// Explicit types
var firstName = "John";
var age = 30;
var x = ["Hey", 5];
// Enums
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Euripe"] = 4] = "Euripe";
    Continents[Continents["Antartica"] = 5] = "Antartica";
    Continents[Continents["Australia"] = 6] = "Australia";
})(Continents || (Continents = {}));
// usage
var region = Continents.Africa;
