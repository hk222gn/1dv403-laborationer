"using strict";

var Validate = {
    arr: [],
    required: 4,

    init: function () {

        var form = document.querySelector("#form");
        var footer = document.createElement("footer");
        footer.setAttribute("class", "invalid");
        var text = document.createTextNode("None of the red marked fields can be empty! Please fill them in!");

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
                form.removeChild(footer);
                return true;
            }
            else {
                footer.appendChild(text);
                form.appendChild(footer);
                return false;
            }
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
                el.setAttribute("class", "valid");//nagot sadant?
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
    }
};
window.onload = Validate.init;