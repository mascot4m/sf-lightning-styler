chrome.tabs.onCreated.addListener(do_something);
chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
	if (info.status == 'complete') do_something(tab);
});
chrome.runtime.setUninstallURL('https://goo.gl/forms/L7WzOQe7E6Ozc13V2');

function do_something(tab) {
	var tabUrl = tab.url; 

  if (tabUrl && tabUrl.indexOf(".lightning.force.com") != -1) {
    chrome.storage.sync.get({
      isActivated: true
    }, function(items) {
    if (items.isActivated) {
      chrome.tabs.insertCSS(tab.id, {
        file: "style.css"
      });
    }
  });

    chrome.storage.sync.get({
      fields_style: true
    }, function(items) {
    if (items.fields_style) {
      chrome.tabs.insertCSS(tab.id, {
        file: "fields_style.css"
      });
    }
  });
    chrome.storage.sync.get({
      path_style: true
    }, function(items) {
    if (items.path_style) {
      chrome.tabs.insertCSS(tab.id, {
        file: "path_style.css"
      });
    }
  });
    chrome.storage.sync.get({
      sandbox_top_bar: true
    }, function(items) {
    if (items.sandbox_top_bar) {
      chrome.tabs.insertCSS(tab.id, {
        file: "sandbox_top_bar.css"
      });
    }
  });
    chrome.storage.sync.get({
      header_bar: true
    }, function(items) {
    if (items.header_bar) {
      chrome.tabs.insertCSS(tab.id, {
        file: "header_bar.css"
      });
    }
  });
 }		
}
