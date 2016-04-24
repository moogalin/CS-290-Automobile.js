
function Automobile( year, make, model, type){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

Automobile.prototype.logMe = function(status) {
    if (status == 'true') {
      //print year, make, model
      console.log(this.year + " " + this.make + " " + this.model + " " + this.type);
    }
    else if (status == 'false') {
      //print year, make, model, and type
      console.log(this.year + " " + this.make + " " + this.model);
    }
};

var automobiles = [
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

var numbersArr = [1, 4, 7, 3, 6];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array ){
    /*your code here*/
    //console.log("\nBefore sort:");

    var funcArray = array.slice();

    /*for (var i = 0; i < 6; i++) {
      console.log(funcArray[i]);
    }*/

    var len = funcArray.length;

    // Sorting Method: Bubble Sort Algorithm
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - i - 1; j++) {
        if (!comparator(funcArray[j], funcArray[j+1])) {
          var temp = funcArray[j];
          funcArray[j] = funcArray[j+1];
          funcArray[j+1] = temp;
        }
      }
    }

    //console.log("\nAfter sort:");

    /*for (var k = 0; k < 6; k++) {
      console.log(funcArray[k]);
    }*/

    return funcArray;
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 >= int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
    /* your code here*/
    if (auto1.year >= auto2.year) {
      return true;
    }
    else {
      return false;
    }

}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    /* your code here*/
    var one = auto1.make.toUpperCase();
    var two = auto2.make.toUpperCase();

    if (auto1.make <= auto2.make) {
      return true;
    }
    else {
      return false;
    }

}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    /* your code here*/
    var one = auto1.type.toUpperCase();
    var two = auto2.type.toUpperCase();

    var rankType = ["WAGON", "SUV", "PICKUP", "ROADSTER"];

    /*
    console.log("index of ROADSTER: " + rankType.indexOf("ROADSTER"));
    console.log("index of PICKUP: " + rankType.indexOf("PICKUP"));
    console.log("index of ROADSTER: " + rankType.indexOf("ROADSTER"));
    console.log("index of SUV: " + rankType.indexOf("SUV"));
    console.log("index of WAGON: " + rankType.indexOf("WAGON"));
    console.log("index of SEDAN: " + rankType.indexOf("SEDAN"));
    */

    //console.log("First comparison:" + auto1.type + " vs. " + auto2.type);
    //console.log("Rank type:" + rankType.indexOf(one) + " Rank type 2:" + rankType.indexOf(two));
    if (rankType.indexOf(one) > rankType.indexOf(two)) {
      //console.log(auto1.type + " greater than " + auto2.type);
      return true;
    }
    else if ( rankType.indexOf(one) == rankType.indexOf(two) ) {
      //console.log("auto types are equal");
      if (auto1.year >= auto2.year) {
        //console.log(auto1.year + " greater than " + auto2.year);
        return true;
      }
      else {
        //console.log(auto1.year + " less than " + auto2.year);
        return false;
      }
    }

    else {
      //console.log(auto1.type + " less than " + auto2.type);
      return false;
    }

  }


/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.
*/

console.log('*****');

/*sortArr(exComparator, numbersArr);
sortArr(yearComparator, automobiles);
sortArr(makeComparator, automobiles);
sortArr(typeComparator, automobiles);
*/


/*console.log("\n" + yearComparator(automobiles[0], automobiles[1]));
console.log(yearComparator(automobiles[1], automobiles[2]));
console.log(yearComparator(automobiles[2], automobiles[3]));
console.log(yearComparator(automobiles[3], automobiles[4]));
console.log(yearComparator(automobiles[4], automobiles[5]));

console.log("\n" + makeComparator(automobiles[0], automobiles[1]));
console.log(makeComparator(automobiles[1], automobiles[2]));
console.log(makeComparator(automobiles[2], automobiles[3]));
console.log(makeComparator(automobiles[3], automobiles[4]));
console.log(makeComparator(automobiles[4], automobiles[5]));

console.log("\n" + typeComparator(automobiles[0], automobiles[1]));
console.log(typeComparator(automobiles[1], automobiles[2]));
console.log(typeComparator(automobiles[2], automobiles[3]));
console.log(typeComparator(automobiles[3], automobiles[4]));
console.log(typeComparator(automobiles[4], automobiles[5]));
*/


console.log('The cars sorted by year are:');
/*(year make model of the 'greatest' car)
(...)
*/

for (var i = 0; i < automobiles.length; i++) {
  (sortArr(yearComparator, automobiles))[i].logMe('false');
}

/*
(year make model of the 'least' car)
*/

console.log('\nThe cars sorted by make are:');
/*(year make model of the 'greatest' car)
(...)
*/

for (var i = 0; i < automobiles.length; i++) {
  (sortArr(makeComparator, automobiles))[i].logMe('false');
}

/*
(year make model of the 'least' car)
*/

console.log('\nThe cars sorted by type are:');
/*(year make model type of the 'greatest' car)
(...)
*/
for (var i = 0; i < automobiles.length; i++) {
  (sortArr(typeComparator, automobiles))[i].logMe('true');
}
/*
(year make model type of the 'least' car)
*/
console.log('*****');


/*As an example of the content in the parenthesis:
1990 Ford F-150*/
