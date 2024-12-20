document.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG"){
        chrome.runtime.sendMessage({
            type:"saveImage", 
            src:event.target.src
        });
    }
});