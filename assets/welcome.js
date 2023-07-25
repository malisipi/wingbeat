chrome.runtime.onInstalled.addListener((event) => {
    if (event.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
    }
});

