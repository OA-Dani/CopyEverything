document.getElementById("copy_urls_window").addEventListener("click",async () => {
    const currentWindow = await chrome.windows.getCurrent()
    currentWindowTabs = await chrome.tabs.query({"windowId":currentWindow["id"]})
    windowTabsUrls = currentWindowTabs.map  (windowObject => {return windowObject["url"]})
    await navigator.clipboard.writeText(windowTabsUrls.join("\n"))
})

document.getElementById("copy_urls_browser").addEventListener("click",async () => {
    const currentBrowserSessionTabs = await chrome.tabs.query({})
    const currentBrowserSessionTabsUrls = currentBrowserSessionTabs.map(windowObject => {return windowObject["url"]})    
    await navigator.clipboard.writeText(currentBrowserSessionTabsUrls.join("\n"))
})