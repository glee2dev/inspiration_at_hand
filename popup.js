document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("imageContainer");
    const clearBtn = document.getElementById("clearImages");

    chrome.storage.local.get({images: []}, (data) => {
        data.images.forEach((image) => {
            const imgDiv = document.createElement("div");
            imgDiv.className = "image-item";
            imgDiv.innerHTML = `<img src="${image.src}" alt=""image>`;
            container.appendChild(imgDiv);
        });
    });

    clearBtn.addEventListener("click", () => {
        chrome.storage.local.set({images: []}, () => {
            container.innerHTML = "";
        });
    });
});