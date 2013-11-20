"use strict";

var makePerson = function(persArr){
    var i, averageAge = 0, names = "", maxAge, minAge, result;

    //Kollar max och min värde
    maxAge = Math.max.apply(Math, persArr.map(function (o) { return o.age; }));
    minAge = Math.min.apply(Math, persArr.map(function (o) { return o.age; }));

    //Sorterar namnen
    persArr.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });

    //Lägger namnen i names med rätt struktur och räknar ut medelåldern
    for (i = 0; i < persArr.length; i += 1) {
        
        //namnen
        if (i < persArr.length - 1) {
            names += persArr[i].name + ", ";
        }
        else
            names += persArr[i].name;
        //Medelåldern
        averageAge += persArr[i].age;
    }

    averageAge = Math.round(averageAge / persArr.length);

    result = { averageAge: averageAge, maxAge: maxAge, minAge: minAge, names: names };

    return result;
}

var data = [{ name: "John Häggerud", age: 37 }, { name: "Johan Leitet", age: 36 }, { name: "Mats Loock", age: 46 }];

var result = makePerson(data);

console.log(result);