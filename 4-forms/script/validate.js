"using strict";

var Validate = {
    arr: [],

    init: function () {

        var form = document.querySelector("#form");

        Validate.getElements(form);
            
        Validate.isEmpty(Validate.arr[0]);
        Validate.isEmpty(Validate.arr[1]);
        
        Validate.checkZip(Validate.arr[2]);

        Validate.checkMail(Validate.arr[3]);

        form.onsubmit = function () {

            //If there are a ton of these, use a for loop to get the amount of "valid" classes, then compare to the amount there should be.
            if (Validate.arr[0].className && Validate.arr[1].className && Validate.arr[2].className && Validate.arr[3].className == "valid")
                return true;
            else
                return false;
        }
    },

    getElements: function (f) {
 
        for (var i = 0; i < f.elements.length; i++) {
            Validate.arr[i] = f.elements[i];
        }
    },

    isEmpty: function (el) {

        el.onblur = function () {
            if (el.value == '')
                el.setAttribute("class", "invalid");
            else
                el.setAttribute("class", "valid");//nagot sadant?
        }
    },

    checkZip: function (el) {
        var re = "^\\d{5}?$";

        el.onblur = function () {

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