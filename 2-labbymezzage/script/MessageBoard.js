"use strict";

var MessageBoard = {
    
    messages: [],

    init: function (e) {
        var button = document.getElementById("button");
        var textarea = document.getElementById("textarea");

        textarea.onkeypress = function (e) {
            if (!e) var e = window.event;

            if (e.shiftKey) {
                
            }
            else if (e.keyCode == 13) {
                MessageBoard.getMessage();
                e.preventDefault();
            }
        }

        
        button.addEventListener("click", MessageBoard.getMessage, false);
        
        
    },

    getMessage: function () {

        var mess = new Message(document.getElementById("textarea").value, new Date());
        var area = document.getElementById("textarea");
        area.value = "";
        MessageBoard.messages.push(mess);
        MessageBoard.renderMessage(MessageBoard.messages.length - 1);
        
    },

    renderMessages: function () {

        var div = document.getElementById("messagearea").innerHTML = "";

        for (var i = 0; i < MessageBoard.messages.length;i++) {
            MessageBoard.renderMessage(i);
        }
        MessageBoard.counterRender();
        
    },
    
    
    renderMessage: function (messageID) {

        //Skriver ut anvandarens text
        var div = document.getElementById("messagearea");
        var text = document.createElement("p");
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();//Gron text ska fixas
        

        //Skapar A taggen, klickbar
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.setAttribute("class", "delete");
        a.alt = "Close";
        
        
        MessageBoard.counterRender();

        a.onclick = function () {
            if (!(confirm("Ar du saker pa att du vill radera meddelandet?"))) {
                return;
            }
            MessageBoard.deleteMessage(messageID);
        }
        var aa = document.createElement("a");
        aa.setAttribute("href", "#");
        aa.setAttribute("class", "time");
        aa.alt = "Time";
        

        aa.onclick = function () {
            
            alert(MessageBoard.messages[messageID].getDateText());
        }

        //Skriver ut footer dar tiden da meddelandet las till visas.
        var footer = document.createElement("footer");
        footer.innerHTML = "Skrivet: " + MessageBoard.messages[messageID].getDate().toLocaleTimeString();

        div.appendChild(a);
        div.appendChild(aa);
        div.appendChild(footer);
        div.appendChild(text);
        
    },

    deleteMessage: function (messageID) {
        MessageBoard.messages.splice(messageID, 1);
        MessageBoard.renderMessages();
    },

    counterRender: function () {
        //Skriver ut countern
        var counter = document.getElementById("counter");
        counter.innerHTML = "";
        counter.innerHTML = "Antal Meddelanden: " + MessageBoard.messages.length;
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

