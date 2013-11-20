"use strict";

var makePerson = function(persArr){
    var i, averageAge, names = "", maxAge, minAge, result;
    maxAge = Math.max.apply(Math, persArr.map(function (o) { return o.age; }));
    minAge = Math.min.apply(Math, persArr.map(function (o) { return o.age; }));

    for (i = 0; i < persArr.length; i += 1) {
        
        if (i < persArr.length - 1) {
            names += persArr[i].name + ", ";
        }
        else
            names += persArr[i].name;
    }
    for (i = 0; i < persArr.length; i += 1) {
        averageAge += persArr[i].age; // lägg till korrekt uträkning
        console.log(persArr[i].age);
    }
    averageAge = averageAge / persArr.length;
    result = { maxAge: maxAge, minAge: minAge, averageAge: averageAge, names: names };

    return result;
}

var data = [{ name: "John Häggerud", age: 37 }, { name: "Johan Leitet", age: 36 }, { name: "Mats Loock", age: 46 }];

var result = makePerson(data);

console.log(result);