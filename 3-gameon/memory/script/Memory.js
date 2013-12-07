"use strict";

var Memory = {

    randArray: [],

    init: function () {
        Memory.randArray = RandomGenerator.getPictureArray(4, 2);
        Memory.RenderTable();
    },

    RenderTable: function () {
        var div = document.getElementById("table");
        var thead = document.createElement("table");
        var img = document.createElement("img");
        thead.setAttribute("border", 1);
        div.appendChild(thead);
        var tbody = document.createElement("tbody");
        for (var i = 0; i < 2; i++) {
            var tr = document.createElement("tr");
            thead.appendChild(tr);
            for (var j = 0; j < 4; j++) {
                var td = document.createElement("td");
                tr.appendChild(td);
                img.setAttribute("src", "pics/0.png");
                td.appendChild(img);
            }
        }
    }


}

window.onload = Memory.init;