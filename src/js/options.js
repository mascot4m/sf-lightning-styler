function save_options() {
  const options = {
    fields_style: document.getElementById("fields_style").checked,
    sandbox_top_bar: document.getElementById("sandbox_top_bar").checked,
    header_bar: document.getElementById("header_bar").checked,
    tabs_style: document.getElementById("tabs_style").checked,
    modal_style: document.getElementById("modal_style").checked,
  };

  chrome.storage.sync.set(options, function () {
  });
}

function restore_options() {
  chrome.storage.sync.get(
    {
      fields_style: true,
      sandbox_top_bar: true,
      header_bar: true,
      tabs_style: true,
      modal_style: true,
    },
    function (items) {
      document.getElementById("fields_style").checked = items.fields_style;
      document.getElementById("sandbox_top_bar").checked =
        items.sandbox_top_bar;
      document.getElementById("header_bar").checked = items.header_bar;
      document.getElementById("tabs_style").checked = items.tabs_style;
      document.getElementById("modal_style").checked = items.modal_style;
    }
  );
}

document.addEventListener("DOMContentLoaded", restore_options);

const minorCheckboxes = document.getElementsByClassName("minor-style");
for (let i = 0; i < minorCheckboxes.length; i++) {
  minorCheckboxes[i].addEventListener("change", save_options);
}
