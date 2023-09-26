//Schritt 1: Erstellt ein Array von Zahlen. Nutzt die '.map'-Funktion, um alle Zahlen im Array zu verdoppeln.
const bunchOfNumbers :number[] = [1,2,3,4,5,6,7,8,9];
const doubleBunchOfNumbers = bunchOfNumbers.map((num) => num * 2);
console.log("Bunch of numbers: " + bunchOfNumbers);
console.log("Doubled: " + doubleBunchOfNumbers);

//Schritt 2: Erstellt ein Array von Wörtern. Nutzt die '.filter'-Funktion, um nur die Wörter auszuwählen, die länger als 5 Buchstaben sind.
const words :string[] = ["don't", "come", "easy", "to", "me.", "Foxtrott", "Unicorn", "Charlie", "Kilo!!!"];
const filteredWords = words.filter((word) => word.length > 5);
console.log("Words: " + filteredWords);

//Schritt 3: Erstellt ein Array von Zahlen. Nutzt die '.reduce'-Funktion, um die Summe aller Zahlen im Array zu berechnen.
const sumOf = bunchOfNumbers.reduce((addedNums, currentNum) => addedNums + currentNum, 0);
console.log("Sum of bunch of Numbers: "+sumOf);

//Schritt 4: Erstellt ein Array von Zahlen. Nutzt die '.some'-Funktion, um zu überprüfen, ob mindestens eine Zahl größer als 10 ist.
const biggerThanFive = bunchOfNumbers.some((num) => num > 10);
console.log("Are there numbers bigger than 10: " + biggerThanFive);