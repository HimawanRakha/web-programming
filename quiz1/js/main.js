// quiz1/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const loadComponent = async (url, elementId) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.text();
      document.getElementById(elementId).innerHTML = data;
    } catch (error) {
      console.error("Failed to load component:", error);
    }
  };

  const pathPrefix = window.location.pathname.includes("/profile/") || window.location.pathname.includes("/hometown/") || window.location.pathname.includes("/food/") || window.location.pathname.includes("/tourist/") ? "../" : "";

  loadComponent(`${pathPrefix}components/sidebar.html`, "sidebar-placeholder");
});
