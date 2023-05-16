// This script will run in the background of the extension.

// When a new tab is opened, inject the content script.

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

  if (changeInfo.status === "complete") {

    chrome.tabs.executeScript(tabId, {file: "contentscript.js"});

  }

});

