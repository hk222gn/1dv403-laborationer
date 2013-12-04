"use strict";

function Message(message, date) {

	this.getText = function() {
		return message;
	}
	
	this.setText = function(_text) {
		message = _text;
	}
	
	this.getDate = function() {
	    return date;
	}
	
	this.setDate = function(_date) {
	    date = _date;
	}
	
	Message.prototype.toString = function() {
		return this.getText()+" ("+this.getDate()+")";
	}
	
	Message.prototype.getHTMLText = function () {
	    return this.getText().replace(/[\n\r]/g, "<br />");
	}
	
	Message.prototype.getDateText = function() {
	    //return this.getDate();
	    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
	    return "Inglagget skapades den " + this.getDate().getDay() + " " + months[this.getDate().getMonth()] + " " + this.getDate().getFullYear() + " klockan " + this.getDate().toLocaleTimeString();
	}
}