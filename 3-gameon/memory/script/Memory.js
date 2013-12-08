"use strict";

var rows = 4;
var cells = 4;
var counter = 0;

var Memory = {

    randArr: [],

    picArr: ["pics/0.png",
                        "pics/1.png",
                        "pics/2.png",
                        "pics/3.png",
                        "pics/4.png",
                        "pics/5.png",
                        "pics/6.png",
                        "pics/7.png",
                        "pics/8.png"],
    init: function () {
        Memory.randArr = RandomGenerator.getPictureArray(rows, cells);//Ska ? bilden vara pa alla forst, sen bytas? med hjalp av ett ID?
        Memory.renderTable();
    },

    renderTable: function () {
        //array with all pictures
        

        var picID = 0;

        var div = document.getElementById("table");
        var thead = document.createElement("table");
        var tbody = document.createElement("tbody");
        
        thead.setAttribute("border", 1);
        div.appendChild(thead);
        
        //Creates the table and adds the images( + links)
        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");
            thead.appendChild(tr);

            for (var j = 0; j < cells; j++) {

                picID += 1;

                var td = document.createElement("td");
                var img = document.createElement("img");
                var a = document.createElement("a");
                a.href = "#";
                img.src = Memory.picArr[0];//make dynamic
                img.id = picID;//unsure
                //img.src = picArr[Memory.randArr[picID]];
                tr.appendChild(td);
                td.appendChild(a);
                a.appendChild(img);

            }
        }
        a.onclick = Memory.flipPicture;
    },
    flipPicture: function () {
        counter += 1;
        document.getElementById("1").src = Memory.picArr[Memory.randArr[1]];//unsure
        console.log("as");
        //Document?
        //gor sa bilden byts
        //on click, find out about the image number? in randArr?
    }
}

window.onload = Memory.init;