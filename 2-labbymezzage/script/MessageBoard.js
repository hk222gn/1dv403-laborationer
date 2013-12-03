"use strict";

var MessageBoard = {
    
    messages: [],

    init: function (e) {
        var button = document.getElementById("button");
        button.addEventListener("click", MessageBoard.getMessage, false);
        var dbutton = document.getElementsByName("a");
    },

    getMessage: function () {

        var mess = new Message(document.getElementById("textarea").value, new Date());
        MessageBoard.messages.push(mess);
        MessageBoard.renderMessage(0);//MessageBoard.messages.length -1

        
    },

    renderMessages: function () {

        var div = document.getElementById("messagearea").innerHTML = "";

        for (var i = 0; i < MessageBoard.messages.length; i += 1) {
            MessageBoard.renderMessages(i);
        }
    },
    
    
    renderMessage: function (messageID) {

        var div = document.getElementById("messagearea");
        var text = document.createElement("p");
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        div.appendChild(text);
        var a = document.createElement("a");
        a.setAttribute('src', '#');
        a.setAttribute("class", "delete");
        a.alt = "Close";
        text.appendChild(a);//skit med A taggen, ska den wrappa allt?
        //var img = document.createElement("img");
        //img.setAttribute("src", "bilder/NO.png");
        //a.appendChild(img);
        a.onclick = function () {
            MessageBoard.deleteMessage(messageID);
        }
    },

    deleteMessage: function (messageID) {
        MessageBoard.message.splice(index, messageID);
    }
    
}

window.onload = function () {
    MessageBoard.init();
}

//submitButton: function () {
    //    getMessageFromTextfield()
    //    renderMessage(0);
    //    logger(MessageBoard.messages[0].getText());
    //    logger(MessageBoard.messages[0].getDate());
    //},

    



//if (button.AddEventListener) {
//    button.click("onclick", function () { //nytt objekt med texten. 
//        // Anvand value pa textarea objektet for att fa ut vad anvandaren skrev in.
//        console.log("RUMPE");
//        button.click(function () {console.log("RUMPE");});
//    });
//}
