

var name1 = "Jason Doe";
var name = "Jane Doe Svensson";
var age = 33;

var tis = "Tisdag";
var burgare = "Hamburgare";
var brb = "I'll be back!";
var learning = "It's Learning";
var str = learning.toUpperCase();
console.log("Namn: " + name +"\nAge: "+age);


// Förtydliga gärna vilken uppgift utskrifterna kommer ifrån
//Uppgift 1
console.log( "Uppgift 1." );
console.log( 5 * 2 < 12 );
console.log( 55 !=  22  );
console.log( 16 / 4 ==  4 );
console.log( 8 + 2  <= 128 );
console.log( 32 * 8  > 255 );

console.log(name1.substring(0, 5)); //Delar upp en sträng i delar, 0 var den börjar och 5 hur lång
console.log(name.substring(5)); // Börjar på femte elementet och tar resterande
//Uppgift 2
console.log("Day: " + tis.substring(0, 3) +
            "\nFood: " + burgare.substring(3,10) +
            "\nBrb: " + brb.substring(5,12)
           );
//Uppgift 3
console.log(str.substring(5,13));
console.log((learning.substring(5,13)).toUpperCase());
console.log((learning.substring(5,13)).toLowerCase());

//Uppgift 4
var numbers = [128, 256, 512, 1024, 2048];
var holder = 0;
var index = 0;

for(var i=0; i<numbers.length;i++){
    holder = holder + numbers[i]
    console.log(numbers[i]);
    index++;
}
console.log("Medelvärde: " + holder/index);

//Uppgift 5
var countries = ["Sweden", "Denmark", "Finland", "Norway"];
var total = 0;
var countIndex = 0;
console.log(countries[1].substring(0, 3));

for(var i = 0; i<countries.length; i++){
    total = total += countries[i].length;
    countIndex ++;
}
console.log("Total: " + total + "\nMedelvärde: " + total/countIndex);






