"use strict";


var Memory = {
    counter: 0,
    rows: 4,
    cells: 4,
    randArr: [],
    compArr: [],
    clickable: 0,
    win: 0,
    

    init: function () {
        
        Memory.randArr = RandomGenerator.getPictureArray(Memory.rows, Memory.cells);//Ska ? bilden vara pa alla forst, sen bytas? med hjalp av ett ID?
        Memory.renderTable(Memory.rows, Memory.cells);
    },

    renderTable: function (rows, cells) {
        //array with all pictures
        

        var picID = 0;

        var div = document.getElementById("table");
        var thead = document.createElement("table");
        
        thead.setAttribute("border", 1);
        div.appendChild(thead);
        
        //Creates the table and adds the images( + links)
        for (var i = 0; i < rows; i++) {

            var tr = document.createElement("tr");
            thead.appendChild(tr);

            for (var j = 0; j < cells; j++) {

                var td = document.createElement("td");
                var img = document.createElement("img");
                var a = document.createElement("a");

                a.href = "#";
                img.src = "pics/0.png";

                tr.appendChild(td);
                td.appendChild(a);
                a.appendChild(img);

                Memory.flipPicture(picID, a);

                picID += 1;
            }
        }
    },
    flipPicture: function (picID, id) {

        id.onclick = function () {

            var img = id.getElementsByTagName("img")[0];

            if (img.getAttribute("src") != "pics/0.png")
                return;

            if (img.getAttribute("src") === "pics/0.png" && Memory.clickable === 0 || Memory.clickable === 1) {

				Memory.clickable += 1;
                img.src = "pics/" + Memory.randArr[picID] + ".png";
                
                Memory.compArr[Memory.counter % 2] = img;

                if (Memory.clickable === 2 && Memory.compArr[0].getAttribute("src") === Memory.compArr[1].getAttribute("src")) {

                    Memory.win += 1;
                    Memory.clickable = 0;

                    if (Memory.win === (Memory.rows * Memory.cells) / 2) {
                        alert("Congratulations! You won! " + Math.floor(Memory.counter / 2) + " attempts were made before you won.");
                    }
                }
                else if (Memory.clickable === 2){

                    setTimeout(function () {
                        Memory.compArr[0].setAttribute("src", "pics/0.png");
                        Memory.compArr[1].setAttribute("src", "pics/0.png");
                        Memory.clickable = 0;
                    }, 500);
                }
                Memory.counter += 1;
            }
        }
    }
}

window.onload = Memory.init;

//Memory.compArr.push(img);
//Memory.compArr[Memory.counter % 2] = Memory.randArr[picID]