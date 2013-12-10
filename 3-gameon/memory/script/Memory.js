"use strict";


var counter = 0;

var Memory = {

    randArr: [],

    init: function () {
        var rows = 4,
            cells = 4;

        Memory.randArr = RandomGenerator.getPictureArray(rows, cells);//Ska ? bilden vara pa alla forst, sen bytas? med hjalp av ett ID?
        Memory.renderTable(rows, cells);
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
                //a.onclick = function (e) {
                //    e.preventDefault();
                //    Memory.flipPicture();
                    
                //}
                Memory.flipPicture(picID, a);

                picID += 1;
            }
        }
    },
    flipPicture: function (picID, id) {
        counter += 1;

        id.onclick = function () {
            var img = id.getElementsByTagName("img")[0];
            if (img.getAttribute("src") == "pics/0.png") {

                img.src = "pics/" + Memory.randArr[picID] + ".png";
                if (counter % 2 == 0) {
                    //timer TROR JAG HAHHAHAHA SA KUL :)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
                }
            }
        }
        //var img = document.getElementsByTagName();
        //img.src = Memory.picArr[Memory.randArr[1]];
        //a.src = Memory.picArr[Memory.randArr[img.id]]
        //document.getElementById("2").src = Memory.picArr[Memory.randArr[1]];//unsure
        //Document?
        //gor sa bilden byts
        //on click, find out about the image number? in randArr?
    }
}

window.onload = Memory.init;