var numbers, rows, amount, grid, result;
var tables = [];
var table = [];
var readyTables = [];

//ns. Main
function createBingo(){
	//Tallentaa annetut luvut muuttujiin
	numbers = document.getElementById('numbers').value;
	rows = document.getElementById('rows').value;
	grid = rows * rows;
	amount = document.getElementById('amount').value;
	console.log("Numeroita: " +numbers + " Rivejä: " +rows +" Lkm: "+amount);
	bingoTable();
	createTables();
	showTables();
};

//Luo annetuista luvuista taulukon
function bingoTable(){
	for (i=0; i<numbers; i++){
		tables[i] = i+1;
	}
};
//Sekoittaa taulukon
function shuffleArray(array) { 
	console.log("errday im shuffling");
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    table = tables.slice(0, grid)
    return table;
};
function createTables(){
	for (var i=0; i < amount; i++){
		
		readyTables[i] = shuffleArray(tables);
	}
	console.log(readyTables);
};

function makeTableHTML(myArray) {
    result = "<table border=1><tr>";
    for(var i=0; i<myArray.length; i++) {
        	result +=  "<td>"+myArray[i]+"</td>";
        	if((i+1)%rows == 0){
        	result += "</tr><tr>";	
       		}
        	
    }
    result += "</table><br>";

    return result;
};
function showTables(){
	for(var i=0; i < readyTables.length; i++){
	makeTableHTML(readyTables[i]);
	document.getElementById('tables').innerHTML += result;
	}
};

