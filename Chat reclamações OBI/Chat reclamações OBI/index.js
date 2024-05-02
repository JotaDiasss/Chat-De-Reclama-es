document.addEventListener("DOMContentLoaded", function () {
    
    function addMessage(message, isUser) {
        var chatContainer = document.getElementById("complaint-chat");
        var messageElement = document.createElement("div");
        messageElement.className = isUser ? "message user-message" : "message admin-message";
        messageElement.textContent = message;


        
        chatContainer.appendChild(messageElement);


        
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }


    
    addMessage("Bem-vindo ao Chat de Reclamações! Como podemos melhorar?", false);


    
    function sendMessage() {
        var userInput = document.getElementById("user-input");
        var userMessage = userInput.value;
        if (userMessage.trim() !== "") {
            
            addMessage(userMessage, true);
            
            userInput.value = "";
            
            setTimeout(function () {
                addMessage("Obrigado pela sua contribuição.", false);
            }, 2000);
        }
    }


    
    document.getElementById("user-input").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });


    
    document.getElementById("send-button").addEventListener("click", function () {
        sendMessage();
    });
});



function showmodal() {
    var element = document.getElementById("modal");
    element.classList.add("show-modal");
}



function hidemodal() {
    var element = document.getElementById("modal");
    element.classList.remove("show-modal");
}
