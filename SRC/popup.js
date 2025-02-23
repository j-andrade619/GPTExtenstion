document.getElementById("openChatGPT").addEventListener("click", function() {
    chrome.tabs.create({ url: "https://chat.openai.com/" });
});