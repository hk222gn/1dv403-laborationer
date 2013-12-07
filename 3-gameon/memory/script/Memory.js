"use strict";

var Memory = {

    randArray: [],

    init: function () {
        Memory.randArray = RandomGenerator.getPictureArray(4, 4);
        console.log(Memory.randArray[1]);
        console.log(Memory.randArray[3]);
        console.log(Memory.randArray[2]);
    },

    


}

window.onload = Memory.init;