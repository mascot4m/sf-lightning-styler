function save_options() {
  var isActivated = document.getElementById('isActivated').checked;  
  var fields_style = document.getElementById('fields_style').checked;
  var path_style = document.getElementById('path_style').checked;
  var sandbox_top_bar = document.getElementById('sandbox_top_bar').checked;  
  var sandbox_top_bar = document.getElementById('header_bar').checked;
  chrome.storage.sync.set({
    isActivated: isActivated
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved';
    setTimeout(function() {
      status.textContent = '';
    }, 2700);
  });
  chrome.storage.sync.set({
    fields_style: fields_style
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved';
    setTimeout(function() {
      status.textContent = '';
    }, 2700);
  });
  chrome.storage.sync.set({
    path_style: path_style
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved';
    setTimeout(function() {
      status.textContent = '';
    }, 2700);
  });
  chrome.storage.sync.set({
    sandbox_top_bar: sandbox_top_bar
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved';
    setTimeout(function() {
      status.textContent = '';
    }, 2700);
  });
  chrome.storage.sync.set({
    header_bar: header_bar
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved';
    setTimeout(function() {
      status.textContent = '';
    }, 2700);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    isActivated: true
  }, function(items) {
    document.getElementById('isActivated').checked = items.isActivated;
  });
  chrome.storage.sync.get({
    fields_style: true
  }, function(items) {
    document.getElementById('fields_style').checked = items.fields_style;
  });
  chrome.storage.sync.get({
    path_style: true
  }, function(items) {
    document.getElementById('path_style').checked = items.path_style;
  });
  chrome.storage.sync.get({
    sandbox_top_bar: true
  }, function(items) {
    document.getElementById('sandbox_top_bar').checked = items.sandbox_top_bar;
  });  
  chrome.storage.sync.get({
    header_bar: true
  }, function(items) {
    document.getElementById('header_bar').checked = items.header_bar;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
var minorCheckboxes = document.getElementsByClassName('minor-style');
for (var i = 0; i < minorCheckboxes.length; i++) {
  var element = minorCheckboxes[i];
  element.addEventListener('change', function() {
    var masterCheckbox = document.getElementById('isActivated');
    masterCheckbox.checked = false;
    save_options();  
  });
}
document.getElementById('isActivated').addEventListener('change', function() {
  var minorCheckboxes = document.getElementsByClassName('minor-style');
  var isChecked = this.checked;
  for (var i = 0; i < minorCheckboxes.length; i++) {
    var element = minorCheckboxes[i];
    element.checked = isChecked;  
  }
  save_options();  
});


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-101959300-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();