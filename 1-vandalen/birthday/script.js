"use strict";

window.onload = function(){


    var birthday = function (date) {
        if (!/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(date))
            throw new Error("Du har inte angivigt datumet enligt: YYYY-MM-DD");

        var d = new Date();
        var db = new Date(date);
        var dag = 864 * 100000;
        var year;

        if (Math.floor(((db.getTime() + dag) - d.getTime()) / 1000 / 60 / 60 / 24) < 0) {
            year = db.getFullYear();
            db.setFullYear(year += 1);
        }
        return Math.floor(((db.getTime() + dag) - d.getTime()) / 1000 / 60 / 60 / 24);

	};
	// ------------------------------------------------------------------------------

	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});

};