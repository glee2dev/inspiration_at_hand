chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id:"saveImage",
        title:"Save to Inspiration", 
        contexts:["image"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "saveImage") {
        chrome.storage.local.get({images: []}, (data) => {
            const images = data.images;
            images.push({src: info.srcUrl, pageUrl: tab.url});
            chrome.storage.local.set({images});
        });
    }
});

