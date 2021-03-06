'use strict';
// ei tarvinu ku poistaa muutamia tarpeettomia puolipisteitä ja määrittää muutamat muuttujat
// Muuttujien nimet pääosin selkeitä, kuten myös funktioiden tehtävät
// camelCase johdonmukaisesti
// En löytänyt tarvetta määritellä muuttujia etuliitteellä "const"
// Sisennykset hyvin
// Ei tarkistutusta käyttäjän syöttämille negatiivisille arvoille


var numbers, rows, amount, grid, result;// JSLint herjaa pilkuilla erottelusta, en tiedä onko syntaksissa jotain vaaroja
var tables = [];
var table = [];
var readyTables = [];
var imgSrc = '';

var e = document.getElementById('selector'); //Ehkä muuttuja "e" voisi olla kuvaavampi

//ns. Main
function createBingo() {
    //Tallentaa annetut luvut muuttujiin
    numbers = document.getElementById('numbers').value;
    rows = document.getElementById('rows').value;
    grid = rows * rows;
    amount = document.getElementById('amount').value;
    var selected = e.options[e.selectedIndex].value;
    console.log("Numeroita: " + numbers + " Rivejä: " + rows + " Lkm: " + amount);
    bingoTable(selected); //ei toiminut strictilla ilman, että laittaa "selected" parametriksi...
    createTables();
    showTables();
}

//Luo annetuista luvuista taulukon
function bingoTable(selected) {
    for (var i = 0; i < numbers; i++) {
        if (selected === "cat") { //... koska herjasi täällä ettei selected ole määritelty
            imgSrc = '<img src="http://loremflickr.com/200/200?random=' + (i + 1) + '" />';
            tables[i] = imgSrc;
        } else {
            tables[i] = i + 1;
        }
    }
}
//Sekoittaa taulukon ja palauttaa aina yhden valmiin kortin
function shuffleArray(array) {
    console.log("errday im shuffling");
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    table = array.slice(0, grid);
    return table;
}

function createTables() {
    for (var i = 0; i < amount; i++) {

        readyTables[i] = shuffleArray(tables);
    }
    console.log(readyTables);
}

function makeTableHTML(myArray) {
    result = "<table border=1><tr>";
    for (var i = 0; i < myArray.length; i++) {
        result += "<td>" + myArray[i] + "</td>";
        if ((i + 1) % rows === 0) {
            result += "</tr><tr>";
        }

    }
    result += "</table><br><br>";

    return result;
}

function showTables() {
    document.getElementById('tables').innerHTML += "<h3>Valmiit Bingolaput:</h3>";
    for (var i = 0; i < readyTables.length; i++) {
        makeTableHTML(readyTables[i]);
        document.getElementById('tables').innerHTML += result;
    }
}

function raffle() {
    grid = numbers;
    var raffleTable = shuffleArray(tables);
    document.getElementById('raffle').innerHTML += "<h3>Arvotut Bingonumerot/kuvat:</h3>";
    for (var i = 0; i < raffleTable.length; i++) {
        console.log("lol");
        document.getElementById('raffle').innerHTML += "<p>" + (i + 1) + ": " + raffleTable[i] + "</p><br>";
    }
}