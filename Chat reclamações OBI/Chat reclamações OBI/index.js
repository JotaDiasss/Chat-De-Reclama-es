document.addEventListener("DOMContentLoaded", function () {
    // Função para adicionar uma mensagem ao chat
    function addMessage(message, isUser) {
        var chatContainer = document.getElementById("complaint-chat");
        var messageElement = document.createElement("div");
        messageElement.className = isUser ? "message user-message" : "message admin-message";
        messageElement.textContent = message;


        // Adiciona a mensagem ao final do chat
        chatContainer.appendChild(messageElement);


        // Role para baixo para exibir a última mensagem
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }


    // Adiciona a mensagem inicial do administrador
    addMessage("Bem-vindo ao Chat de Reclamações! Como podemos melhorar?", false);


    // Função para enviar uma mensagem do usuário
    function sendMessage() {
        var userInput = document.getElementById("user-input");
        var userMessage = userInput.value;
        if (userMessage.trim() !== "") {
            // Adiciona a mensagem do usuário ao final do chat
            addMessage(userMessage, true);
            // Limpa o campo de entrada do usuário
            userInput.value = "";
            // Simula uma resposta automática do administrador após 2 segundos
            setTimeout(function () {
                addMessage("Obrigado pela sua contribuição.", false);
            }, 2000);
        }
    }


    // Event listener para o pressionamento da tecla Enter no campo de entrada do usuário
    document.getElementById("user-input").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });


    // Event listener para o botão de enviar mensagem do usuário
    document.getElementById("send-button").addEventListener("click", function () {
        sendMessage();
    });
});


// Função para mostrar a modal
function showmodal() {
    var element = document.getElementById("modal");
    element.classList.add("show-modal");
}


// Função para esconder a modal
function hidemodal() {
    var element = document.getElementById("modal");
    element.classList.remove("show-modal");
}
