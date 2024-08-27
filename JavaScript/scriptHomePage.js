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
    var chatbotWindow = document.getElementById("chatbotWindow");
    chatbotWindow.classList.toggle("hidden");
}

function sendMessage() {
    var userMessage = document.getElementById("userMessage").value;
    var chatbotBody = document.getElementById("chatbotBody");

    if (userMessage.trim() !== "") {
        // แสดงข้อความของผู้ใช้
        var userMessageElement = document.createElement("div");
        userMessageElement.className = "user-message";
        userMessageElement.textContent = userMessage;
        chatbotBody.appendChild(userMessageElement);

        // แสดงการตอบกลับของแชทบอท
        var botMessageElement = document.createElement("div");
        botMessageElement.className = "bot-message";
        botMessageElement.textContent = "สวัสดี";
        chatbotBody.appendChild(botMessageElement);

        // เลื่อนการแสดงผลไปที่ข้อความล่าสุด
        chatbotBody.scrollTop = chatbotBody.scrollHeight;

        // ล้างข้อความใน input
        document.getElementById("userMessage").value = "";
    }
}


