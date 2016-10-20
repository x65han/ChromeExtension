console.log("Fetch");
chrome.runtime.sendMessage(document.getElementsByTagName("title")[0].innerText);
