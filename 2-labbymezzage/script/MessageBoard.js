"use strict";

var MessageBoard = {

    messages: [],

    init: function (e) {
        //var mess = new Message("Tester", new Date());
        //alert(mess);
        //alert(mess.getText());
        //mess.setText("Rrrtser");
        //alert(mess);
        MessageBoard.messages[0] = new Message("Tast", new Date());

        var button = document.getElementById("button");
        button.onclick = function (e) {
            GetMessageFromTextfield()
        }
        var GetMessageFromTextfield = function () {
            MessageBoard.messages[0] = new Message(document.getElementById("textarea").value, new Date());
            console.log(MessageBoard.messages[0].getText());
            console.log(MessageBoard.messages[0].getDate());
            alert(MessageBoard.messages[0]);
        }

        var renderMessages = function () {// varfor funkar inte renderMessage: function()

            document.getElementById("messagearea").innerHTML = "";

            for (var i = 0; i < MessageBoard.messages.length; i+=1) {
                MessageBoard.renderMessages(i);
            }
        }

        var renderMessage = function(messageID) {
            //dona

        }
    }
}

    



//if (button.AddEventListener) {
//    button.click("onclick", function () { //nytt objekt med texten. 
//        // Anvand value pa textarea objektet for att fa ut vad anvandaren skrev in.
//        console.log("RUMPE");
//        button.click(function () {console.log("RUMPE");});
//    });
//}
