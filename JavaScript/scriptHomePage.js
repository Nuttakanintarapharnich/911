const images = [];
for (let i = 1; i <= 85; i++) {
    images.push(`images/backg/bgIS${i}.jpg`);
}

let currentIndex = 0;
const section = document.getElementById('background-section');

function changeBackground() {
    section.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 3500); 
changeBackground();



function toggleChatbot() {
    var chatbotContainer = document.getElementById("chatbotContainer");
    var startButton = document.querySelector(".buttonเริ่มต้นการสนทนากับแชทบอท");

    // สลับการแสดงผลของหน้าต่างแชทบอท
    if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
        chatbotContainer.style.display = "flex"; // แสดงแชทบอท
        startButton.style.display = "none"; // ซ่อนปุ่ม
    } else {
        chatbotContainer.style.display = "none"; // ซ่อนแชทบอท
        startButton.style.display = "block"; // แสดงปุ่มอีกครั้ง
    }
}

function sendMessage() {
    var userMessage = document.getElementById("userMessage").value;
    var chatbotBody = document.getElementById("chatbotBody");

    if (userMessage.trim() !== "") {
        var userMessageElement = document.createElement("div");
        userMessageElement.className = "user-message";
        userMessageElement.textContent = userMessage;
        chatbotBody.appendChild(userMessageElement);

        var botMessageElement = document.createElement("div");
        botMessageElement.className = "bot-message";
        botMessageElement.textContent = "สวัสดี! นี่คือตัวอย่างการตอบกลับจากแชทบอท";
        chatbotBody.appendChild(botMessageElement);

        chatbotBody.scrollTop = chatbotBody.scrollHeight;
        document.getElementById("userMessage").value = "";
    }
}


