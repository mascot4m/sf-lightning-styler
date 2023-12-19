chrome.tabs.onCreated.addListener(do_something);
chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  if (info.status == "complete") do_something(tab);
});
chrome.runtime.setUninstallURL("https://goo.gl/forms/L7WzOQe7E6Ozc13V2");

chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.create(
    { url: chrome.runtime.getURL("options.html") },
    function () {}
  );
});

function do_something(tab) {
  var tabUrl = tab.url;

  if (tabUrl && tabUrl.indexOf(".lightning.force.com") !== -1) {
    chrome.storage.sync.get(
      {
        isActivated: true,
        fields_style: true,
        path_style: true,
        sandbox_top_bar: true,
        header_bar: true,
        tabs_style: true,
        modal_style: true,
      },
      function (items) {
        if (items.isActivated) {
          chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ["css/style.css"],
          });
        }

        if (items.fields_style) {
          chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ["css/fields_style.css"],
          });
        }

        if (items.path_style) {
          chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ["css/path_style.css"],
          });
        }

        if (items.sandbox_top_bar) {
          chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ["css/sandbox_top_bar.css"],
          });
        }

        if (items.header_bar) {
          chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ["css/header_bar.css"],
          });
        }

        if (items.tabs_style) {
          chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ["css/tabs_style.css"],
          });
        }

        if (items.modal_style) {
          chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ["css/modal_style.css"],
          });
        }
      }
    );
  }
}