document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[title]')
  );

  tooltipTriggerList.forEach(function (el) {
    new bootstrap.Tooltip(el, {
      placement: "top",
      trigger: "hover",
    });
  });
});