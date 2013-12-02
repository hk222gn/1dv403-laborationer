"use strict";


var MessageBoard = {
        
    messages: [],

    init:function(e) {
        var mess = new Message("Tester", new Date());
        //alert(mess);
        //alert(mess.getText());
        //mess.setText("Rrrtser");
        //alert(mess);
        MessageBoard.messages[0] = new Message("Tast", new Date());
    }

}
    console.log(MessageBoard.messages[0]);
window.onload = MessageBoard.init();