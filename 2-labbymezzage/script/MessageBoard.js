var MessageBoard = {
	
	messages: [], // fortsätt på upp 3.
	
	init:function(e) {
		var mess = new Message("Tester", new Date());
		var mess1 = new Message("Tester", new Date());
		var mess2 = new Message("Testerrr", new Date());
		var mess3 = new Message("Testerrrr", new Date());
		//alert(mess);
		//alert(mess.getText());
		//mess.setText("Rrrtser");
		//alert(mess);
		messages.push(mess, mess1, mess2, mess3);
		alert(messages[2]);//?? hur go on pls
	}
	
}