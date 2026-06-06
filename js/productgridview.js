
function setViewTab(tabId, btn) {
  // Hide all tabs
  document.querySelectorAll(".tab-pane").forEach(tab => {
    tab.classList.remove("show", "active");
  });

  // Show selected tab
  const tab = document.getElementById(tabId);
  tab.classList.add("show", "active");

  // Update active button
  document.querySelectorAll(".view-icons .nav-link").forEach(b => {
    b.classList.remove("active");
  });
  btn.classList.add("active");
}
