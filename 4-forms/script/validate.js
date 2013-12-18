"using strict";

var Validate = {
    arr: [],
    required: 4,
    form1: document.querySelector("#form"),

    init: function () {

        var form = document.querySelector("#form");
        var footer = document.createElement("footer");
        footer.setAttribute("class", "invalid");
        var text = document.createTextNode("None of the red marked fields can be empty! Please fill them in correctly!");

        Validate.getElements(form);
            
        Validate.isEmpty(Validate.arr[0]);
        Validate.isEmpty(Validate.arr[1]);
        
        Validate.checkZip(Validate.arr[2]);

        Validate.checkMail(Validate.arr[3]);

        form.onsubmit = function () {
            var length = 0;

            for (var i = 0; i < Validate.required; i++) {
                if (Validate.arr[i].className == "valid") {
                    length += 1;
                }
            }

            if (length === Validate.required) {
                if (footer.parentNode == form) {
                    form.removeChild(footer);
                }
                if (Validate.popupWindow()) {
                    
                    return true;
                }
                return false;
            }
            else {
                footer.appendChild(text);
                form.appendChild(footer);
                return false;
            }
        }
    },

    getElements: function (f) {
 
        for (var i = 0; i < f.elements.length; i++) {
            Validate.arr[i] = f.elements[i];
        }
    },

    isEmpty: function (el) {

        el.onblur = function () {
            if (el.value == '') {
                el.setAttribute("class", "invalid");
            }
            else
                el.setAttribute("class", "valid");
        }
    },

    checkZip: function (el) {
        var re = "^\\d{5}?$";

        el.onblur = function () {
            el.value = el.value.replace(" ","").replace("-", "").replace("SE","")

            if (el.value.match(re) !== null)
                el.setAttribute("class", "valid");
            else
                el.setAttribute("class", "invalid");
        }
    },

    checkMail: function (el) {

        el.onblur = function () {

            if (el.value.match(/^[\w]+@(?:[\w-]+\.)+[\w]{2,4}$/) !== null)
                el.setAttribute("class", "valid");
            else
                el.setAttribute("class", "invalid");
        }
    },

    popupWindow: function () {
        var temp;
        var temp2;

        var el = document.getElementById("overlay");
        el.setAttribute("class", "visible");
        var div = document.createElement("div");
        div.setAttribute("id", "popup");

        
        var header = document.createElement("header");
        var confirm = document.createElement("input");
        var cancel = document.createElement("input");
        confirm.setAttribute("type", "submit");
        confirm.setAttribute("value", "Godkan kop");
        cancel.setAttribute("type", "submit");
        cancel.setAttribute("value", "Avbryt");
        header.appendChild(document.createTextNode("Godkan ditt kop"));

        confirm.onclick = function () { el.setAttribute("class", "hidden"); Validate.form1.submit(); }
        cancel.onclick = function () { el.setAttribute("class", "hidden"); el.removeChild(div);};

        el.appendChild(div);
        div.appendChild(header);

        for (var i = 0; i < Validate.required; i++) {
            var d = document.createElement("div");
            d.setAttribute("class", "name");
            temp2 = Validate.arr[i].name;
            d.appendChild(document.createTextNode(temp2));
            div.appendChild(d);


            var dd = document.createElement("div");
            dd.setAttribute("class", "values");
            temp = Validate.arr[i].value;
            dd.appendChild(document.createTextNode(temp));
            div.appendChild(dd);
        }
        
        
        div.appendChild(cancel);
        div.appendChild(confirm);
    }
};
window.onload = Validate.init;


//If there are not a ton of these, this is a possibility.

//if (Validate.arr[0].className && Validate.arr[1].className && Validate.arr[2].className && Validate.arr[3].className == "valid") {
//    form.removeChild(footer);
//    return true;
//}
//else {
//    footer.appendChild(text);
//    form.appendChild(footer);
//    return false;
//}